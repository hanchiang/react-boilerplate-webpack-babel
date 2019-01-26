import React from 'react';

import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/feed">Feed</NavLink>
    </nav>
  );
}
