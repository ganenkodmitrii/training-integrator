import React from 'react';

import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
      Products
    </NavLink>

    <NavLink to="/cart" className={s.link} activeClassName={s.activeLink}>
      Cart
    </NavLink>
  </nav>
);
export default Navigation;
