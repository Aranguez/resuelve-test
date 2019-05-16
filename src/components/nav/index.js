import React from 'react';
import '../../styles/nav.scss';

import Search from './Search';

const Nav = () => {
  return (
    <nav>
      <div className="container flex sp-btw align-center">
        <img src="assets/img/Studio_Ghibli_Logo.svg" alt="Ghibli-Studio-Logo" width="200"/>
        <Search/>
      </div>
    </nav>
  );
};

export default Nav;
