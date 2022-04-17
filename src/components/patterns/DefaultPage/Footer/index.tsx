import * as React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>Created by <a rel="nofollow" href="https://iugmali.com">iugmali.com</a></p>
    </footer>
  );
};
export default Footer;