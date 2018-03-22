import React, { Component } from 'react';
import { getWorkPortfolio } from '../api/portfolio';
import { PortfolioRows } from './portfolioUtil'
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  const portfolio = getWorkPortfolio();

    return (
        <div className="posts">
          <h2>Past Job Experience</h2>
        	{ PortfolioRows(portfolio) }
        </div>
    );

  }
}

export default Portfolio;
