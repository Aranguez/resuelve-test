import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/nav.scss';

import Search from './Search';

const Nav = () => {
  return (
    <nav>
      <div className="container flex sp-btw align-center">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </div>
        <div>
          <img src="assets/img/Studio_Ghibli_Logo.svg" alt="Ghibli-Studio-Logo" width="200"/>
          <Search/>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
