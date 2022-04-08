import * as React from 'react';
import styles from './Footer.module.scss';

type Props = {

};
const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>Created by <a href="https://iugmali.com">iugmali.com</a></p>
    </footer>
  );
};
export default Footer;