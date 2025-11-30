import fs from 'fs';
import path from 'path';

const projectRoot = path.resolve(__dirname, '..');

interface CheckResult {
  success: boolean;
  message: string;
}

const checks: Array<() => CheckResult> = [];
let hasError = false;

// --- Color helpers for console output ---
const red = (text: string) => `\x1b[31m${text}\x1b[0m`;
const green = (text: string) => `\x1b[32m${text}\x1b[0m`;
const yellow = (text: string) => `\x1b[33m${text}\x1b[0m`;

/**
 * CHECK 1: Verify that devDependencies do not use "latest".
 */
checks.push((): CheckResult => {
  const pkgPath = path.join(projectRoot, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const devDeps = pkg.devDependencies || {};
  const latestDeps = Object.keys(devDeps).filter(dep => devDeps[dep] === 'latest');

  if (latestDeps.length > 0) {
    return {
      success: false,
      message: `[HIGH] Found devDependencies using "latest": ${latestDeps.join(', ')}. Pin them to specific versions.`,
    };
  }
  return { success: true, message: '[OK] All devDependencies are pinned.' };
});

/**
 * CHECK 2: Verify project file structure for misplaced files.
 */
checks.push((): CheckResult => {
  const componentsDir = path.join(projectRoot, 'src', 'components');
  const hooksDir = path.join(projectRoot, 'src', 'hooks');
  const issues: string[] = [];

  // Check for hooks inside /components
  fs.readdirSync(componentsDir).forEach(file => {
    if (file.startsWith('use') && (file.endsWith('.ts') || file.endsWith('.tsx'))) {
      issues.push(`[HIGH] Misplaced hook found: 'src/components/${file}'. Move to 'src/hooks/'.`);
    }
  });

  // Check for components inside /hooks
  fs.readdirSync(hooksDir).forEach(file => {
    // A simple check: if it's a .tsx file and doesn't start with 'use', it might be a component.
    if (file.endsWith('.tsx') && !file.startsWith('use')) {
      issues.push(`[MEDIUM] Possible misplaced component: 'src/hooks/${file}'. Should it be in 'src/components/'?`);
    }
  });

  if (issues.length > 0) {
    return { success: false, message: issues.join('\n') };
  }
  return { success: true, message: '[OK] Project file structure appears correct.' };
});

/**
 * CHECK 3: Verify that no duplicate files exist in the root directory.
 */
checks.push((): CheckResult => {
    const rootFiles = fs.readdirSync(projectRoot);
    const misplacedHooks = rootFiles.filter(file => file.startsWith('use') && file.endsWith('.ts'));

    if (misplacedHooks.length > 0) {
        return {
            success: false,
            message: `[HIGH] Found duplicate/misplaced hook(s) in project root: ${misplacedHooks.join(', ')}. Please delete them.`
        };
    }
    return { success: true, message: '[OK] No duplicate hooks found in project root.' };
});


// --- Main execution ---
function runVerification() {
  console.log('🚀 Running Vercel deployment verification script...');
  console.log('--------------------------------------------------');

  checks.forEach((check, index) => {
    const result = check();
    if (result.success) {
      console.log(green(result.message));
    } else {
      console.error(red(result.message));
      hasError = true;
    }
  });

  console.log('--------------------------------------------------');
  if (hasError) {
    console.error(red('🔥 Verification failed. Please fix the high-severity issues before deploying.'));
    process.exit(1); // Exit with error code to fail CI/CD pipelines
  } else {
    console.log(green('✅ Verification successful. Project is ready for deployment!'));
    process.exit(0);
  }
}

runVerification();