import * as React from 'react';
import styles from './Footer.module.scss';

type Props = {

};
const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <a href="https://iugmali.com">iugmali.com</a>
    </footer>
  );
};
export default Footer;