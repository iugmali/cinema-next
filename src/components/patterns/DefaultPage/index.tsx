// @flow
import * as React from 'react';
import styles from './DefaultPage.module.scss';
import Header from "./Header";
import Footer from "./Footer";
import PageTitle from "../../PageTitle";
import {RecoilRoot} from "recoil";

type Props = {
  children?: React.ReactNode;
  pageTitle?: string;
  title: string;
};
const DefaultPage = (props: Props) => {
  return (
    <RecoilRoot>
      <div className={styles.page} >
        <PageTitle title={props.title} />
        <Header title={props.title} />
        <main className={styles.page__main}>
          <h1 className={styles.page__title}>{props.pageTitle ? props.pageTitle : ''}</h1>
          {props.children}
        </main>
        <Footer />
      </div>
    </RecoilRoot>
  );
};
export default DefaultPage;