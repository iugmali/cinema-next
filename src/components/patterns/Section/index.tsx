import styles from './Section.module.scss';
import React from "react";
import classNames from "classnames";
interface Props {
  children?: React.ReactNode,
  title: string
}
const Section = (props: Props) => {
  return (
    <section className={styles.section}>
      <h2 className={classNames({[styles.section__title]: props.title})}>
        {props.title}
      </h2>
      {props.children}
    </section>
  );
}
export default Section;