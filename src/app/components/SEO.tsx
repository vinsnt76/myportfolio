import React from 'react';

export const metadata = {
  title: "SEO",
  description: "Search engine metadata for the portfolio."
};

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Vinnie Baker - Portfolio',
  description = 'The personal portfolio of Vince Baker, a Technical Architect & Digital Strategist.',
}) => {
  return null;
};

export default SEO;