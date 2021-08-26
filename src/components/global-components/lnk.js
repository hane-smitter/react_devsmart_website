import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";


function Lnk({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <li className={match ? "current-menu-item" : ""}>
        <Link to={to}>{label}</Link> 
      </li>
    );
}

export {Lnk};