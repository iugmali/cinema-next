// @flow
import * as React from 'react';
import styles from './DefaultPage.module.scss';
import Header from "./Header";
import Footer from "./Footer";
import PageTitle from "../../PageTitle";

type Props = {
  children?: React.ReactNode;
  pageTitle?: string;
  title: string;
};
const DefaultPage = (props: Props) => {
  return (
    <div className={styles.page} >
      <PageTitle title={props.title} />
      <Header />
      <main className={styles.page__main}>
        <h1 className={styles.page__title}>{props.pageTitle ? props.pageTitle : props.title}</h1>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
export default DefaultPage;