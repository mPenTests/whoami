import React from 'react';
import { scroll } from '../App'

const NavBar = () => {
    return (
    <nav>
        <ul>
          <li><a onClick={scroll} className="nav-link home">Home</a></li>
          <li><a onClick={scroll} className="nav-link projects">Projects</a></li>
          <li><a onClick={scroll} className="nav-link about">About</a></li>
          <li><a onClick={scroll} className="nav-link contact">Contact Me</a></li>
        </ul>
      </nav>
    );
}

export default NavBar;
