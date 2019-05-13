import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render (){
    return (
      <header>
        <nav className='ui container'>
          <aside>
            <Link to="/">Robert Walker</Link>
          </aside>
          <aside>
            <ul>
              <li><Link to="/about">About</Link></li>
              {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
          </aside>
        </nav>
      </header>
    );
  }
}

export default Nav;