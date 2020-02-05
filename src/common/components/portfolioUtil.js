import classNames from 'classnames';
import React from 'react';

const RoleRows = ({ roles }) => {
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

export const PortfolioRows = ({ rows }) => rows.map((row) => {
  const className = classNames('portfolio_item', 'clearfix', row.className);
  const { title, link, roles} = row;
  const Link = () => {
    if (!link) {
      return null;
    }
    return (
      <a href={link} target="_blank">(Visit Site)</a>
    )
  }
  return (
    <div key={title} className={className}>
      <h2>
        <Link />
        {title}
      </h2>
      <RoleRows roles={roles} />
    </div>
  )
});
