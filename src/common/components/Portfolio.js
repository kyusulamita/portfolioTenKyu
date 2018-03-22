import React, { Component } from 'react';
import { getWorkPortfolio } from '../api/portfolio';
import { PortfolioRows } from './portfolioUtil'
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  const portfolio = getWorkPortfolio();
	// const RoleRows = (roles) => {
	// 	return roles.map((role) => {
	// 		return (
	// 			<div key={role.title} className="role_wrapper clearfix">
	// 				<p className="role">Role</p>
	// 				<p className="role_title">{role.title}<br />
	// 				<span className="role_skills">{role.skills}</span></p>
	// 			</div>
	// 		)
	// 	});
	// }

 //    const PortfolioRows = () => portfolio.map((row) => {
 //    	const classname = classNames('portfolio_item','clearfix',row.classname);
 //        return (
 //            <div key={row.title} className={classname}>
	// 			<h2><a href={row.link} target="_blank">{row.link ? `(visit site)` : `` }</a> {row.title}</h2>
	// 			{RoleRows(row.roles)}
	// 		</div>
 //        )
 //    });

    return (
        <div className="posts">
          <h2>Past Job Experience</h2>
        	{ PortfolioRows(portfolio) }
        </div>
    );

  }
}

export default Portfolio;
