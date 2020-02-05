import React from 'react';
import { getWorkPortfolio } from '../api/portfolio';
import { PortfolioRows } from './portfolioUtil'

const Portfolio = () => {

  const jobExperiences = getWorkPortfolio();
  
  return (
    <div className="posts">
      <h2>Past Job Experience</h2>
      <PortfolioRows rows={jobExperiences} />
    </div>
  );
}

export default Portfolio;
