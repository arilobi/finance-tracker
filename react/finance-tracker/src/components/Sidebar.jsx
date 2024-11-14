import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Finance Tracker</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active-link" exact>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses" activeClassName="active-link">
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/budget" activeClassName="active-link">
              Budget
            </NavLink>
          </li>
          <li>
            <NavLink to="/report" activeClassName="active-link">
              Report
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active-link">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;