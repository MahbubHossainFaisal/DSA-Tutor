import React from 'react'
import Nav from './Nav'
import classes from '../styles/Layout.module.css'
const Layout = ({children}) => {
    return (
        <React.Fragment>
           <Nav />
           <main className={classes.main}>
              <div className={classes.container}>
                  {children}
              </div>
            </main> 
        </React.Fragment>
    )
}

export default Layout
