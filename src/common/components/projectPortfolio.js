import React, { Component } from 'react';
import { getProjectPortfolio } from '../api/portfolio';
import { PortfolioRows } from './portfolioUtil'

class projectPortfolio extends Component{


  render(){
    const projects = getProjectPortfolio();

    return (
      <div className="posts">
        <h2>Project now and past</h2>
        { PortfolioRows(projects) }
      </div>
    )
  }
}

export default projectPortfolio;
