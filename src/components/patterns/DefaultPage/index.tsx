// @flow
import * as React from 'react';
import styles from './DefaultPage.module.scss';
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
};
const DefaultPage = (props: Props) => {
  return (
    <div className={styles.page} >
      <Header />
        {props.children}
      <Footer />
    </div>
  );
};
export default DefaultPage;