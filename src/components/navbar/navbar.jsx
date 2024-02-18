import React, { useState } from 'react';
import styles from './navbar.module.css';

export const NavBar = () => {
  const [activeUnit, setActiveUnit] = useState('All');

  const handleClick = (unit) => {
    setActiveUnit(unit);
  };

  return (
    <div className={styles.navBar}>
      <div
        className={`${styles.navBarUnit} ${activeUnit === 'All' ? styles.navBarUnitActive : ''}`}
        onClick={() => handleClick('All')}
      >
        All
      </div>
      <div
        className={`${styles.navBarUnit} ${activeUnit === 'Burger' ? styles.navBarUnitActive : ''}`}
        onClick={() => handleClick('Burger')}
      >
        Burger
      </div>
      <div
        className={`${styles.navBarUnit} ${activeUnit === 'Fries' ? styles.navBarUnitActive : ''}`}
        onClick={() => handleClick('Fries')}
      >
        Fries
      </div>
      <div
        className={`${styles.navBarUnit} ${activeUnit === 'Tortilla Wrap' ? styles.navBarUnitActive : ''}`}
        onClick={() => handleClick('Tortilla Wrap')}
      >
        Tortilla Wrap
      </div>
      <div
        className={`${styles.navBarUnit} ${activeUnit === 'Tune It Up' ? styles.navBarUnitActive : ''}`}
        onClick={() => handleClick('Tune It Up')}
      >
        Tune It Up
      </div>
      <div
        className={`${styles.navBarUnit} ${activeUnit === 'Drinks' ? styles.navBarUnitActive : ''}`}
        onClick={() => handleClick('Drinks')}
      >
        Drinks
      </div>
    </div>
  );
};
