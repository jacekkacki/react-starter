import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img src={'./images/space.png'} className={styles.image} alt={'Space'}/>
  </header>
);

export default Hero;