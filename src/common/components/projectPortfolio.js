import React from 'react';
import { getProjectPortfolio } from '../api/portfolio';
import { PortfolioRows } from './portfolioUtil'

const projectPortfolio = () => {


  const projects = getProjectPortfolio();

  return (
    <div className="posts">
      <h2>Projects </h2>
      <PortfolioRows projects={projects} />
    </div>
  )
}

export default projectPortfolio;
