import * as React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a rel="nofollow" href="https://iugmali.com"><p className={styles.footer__title}>Created by iugmali.com</p></a>
    </footer>
  );
};
export default Footer;
