module.exports = {
  reactStrictMode: true,

  // Enable static export for deployment to hosts like GitHub Pages
  output: 'export',

  // Disable image optimization, as it requires a server.
  // This is necessary for static-only hosts.
  images: {
    unoptimized: true,
  },
};