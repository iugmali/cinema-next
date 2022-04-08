import styles from './Section.module.scss';
import React from "react";
interface Props {
  children?: React.ReactNode,
  title: string
}
const Section = (props: Props) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>
        {props.title}
      </h2>
      {props.children}
    </section>
  );
}
export default Section;