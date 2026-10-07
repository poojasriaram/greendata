import React from 'react';
import { Link } from 'react-router-dom';

export function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="breadcrumb-separator">/</span>
          {item.path ? (
            <Link to={item.path}>{item.label}</Link>
          ) : (
            <span className="breadcrumb-current">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumb;
