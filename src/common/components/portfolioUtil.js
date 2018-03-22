import classNames from 'classnames';
import React, { Component } from 'react';

const RoleRows = (roles) => {
  return roles.map((role) => {
    return (
      <div key={role.title} className="role_wrapper clearfix">
        <p className="role">Role</p>
        <p className="role_title">{role.title}<br />
        <span className="role_skills">{role.skills}</span></p>
      </div>
    )
  });
}

export const PortfolioRows = (portfolio) => portfolio.map((row) => {
  const classname = classNames('portfolio_item','clearfix',row.classname);
    return (
        <div key={row.title} className={classname}>
    <h2><a href={row.link} target="_blank">{row.link ? `(visit site)` : `` }</a> {row.title}</h2>
    {RoleRows(row.roles)}
  </div>
    )
});
