import * as React from 'react';
import styles from './Header.module.scss';

type Props = {
  title?: string;
};
const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <p className={styles.header__title}>
        {props.title ?? ''}
      </p>
    </header>
  );
};
export default Header;