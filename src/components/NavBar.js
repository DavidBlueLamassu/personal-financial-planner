import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="pieChart"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Pie Chart
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="forecast"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Forecast
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="summary"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Summary
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
