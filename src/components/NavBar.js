import React from 'react';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

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
      <li>
        <Moment format="dddd, DD MMMM YYYY">
        </Moment>
      </li>
    </ul>
  );
}

export default NavBar;
