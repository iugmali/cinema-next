import * as React from 'react';
import styles from './Header.module.scss';
import PageLink from "../../../PageLink";

type Props = {
  title?: string;
};
const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <nav>
        <PageLink to={"/"}>{props.title ?? ''}</PageLink>
      </nav>
    </header>
  );
};
export default Header;