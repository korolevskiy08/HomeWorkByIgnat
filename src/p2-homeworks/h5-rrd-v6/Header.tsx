import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.content}>
                <div className={classes.burger}>
                    <img src="https://img2.freepng.ru/20180616/tkq/kisspng-hamburger-button-computer-icons-menu-bar-line-5b259eed5e2c38.4971968515291921733857.jpg" alt="Menu"/>
                </div>
                <div className={classes.box}>
                    <NavLink to={'/pre-junior'}>Pre-Junior</NavLink>
                    <NavLink to={'/junior'}>Junior</NavLink>
                    <NavLink to={'/junior-plus'}>Junior-Plus</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
