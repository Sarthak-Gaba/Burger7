import React from 'react';
import BurgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="Burger7" />
    </div>
);

export default logo;