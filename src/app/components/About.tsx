const About = () => {
  return (
    // Use standard Tailwind classes for Hero Section layout and styling
    <section id="about" className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-4xl text-center px-4">
        <h1 className="text-6xl font-extrabold mb-4 dark:text-gray-100">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-left">
          My background spans both B2B and B2C environments, where I’ve consistently delivered measurable results in traffic growth, lead generation, and sales performance.
          <br /><br />
          I bring 7+ years of hands-on online marketing experience, My unique edge lies in combining AI‑powered automation with Answer Engine Optimization (AEO) strategies—future‑proofing your brand in the age of intelligent search.
          <br /><br />
          Explore my portfolio to see how I can add value to your team.
        </p>
        {/* Tailwind classes for a strong CTA button */}
        <a href="#projects" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-blue-700 transition-colors duration-300 transform hover:scale-[1.01]">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default About;