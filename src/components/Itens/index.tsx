import styles from './Itens.module.scss';
import React from "react";

interface Props {
  children?: React.ReactNode;
}
const Itens = (props:Props) => {
  return (
    <ul className={styles.itens}>
      {props.children}
    </ul>
  )
}
export default Itens;