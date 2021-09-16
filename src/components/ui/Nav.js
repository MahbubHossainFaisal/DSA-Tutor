import React from 'react'
import Account from './Account'
import {Link} from 'react-router-dom'
import classes from '../../styles/Nav.module.css'
import logo from '../../assets/images/logo-bg.png'
const Nav = () => {
    return (
       <nav className={classes.nav}>
      <ul>
        <li>
          <Link to='/' className={classes.brand}>
            <img src={logo} alt="DSA-logo" />
            <h2>DSA-Tutor</h2>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
    )
}

export default Nav
