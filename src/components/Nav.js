import React from 'react';
import { Link } from "react-router-dom";
import '../styles/nav.scss';

import Search from './Search';

const Nav = () => {
  return (
    <nav>
      <div className="container container--small flex sp-btw align-center">
        <Link to="/">
          <img src="/assets/img/Studio_Ghibli_Logo.svg" alt="Ghibli-Studio-Logo" width="200"/>
        </Link>
        <Search/>
      </div>
    </nav>
  );
};

export default Nav;
