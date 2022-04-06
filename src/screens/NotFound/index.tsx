import styles from './NotFound.module.scss';
import PageTitle from "components/PageTitle";
import Image from 'next/image';
import {ImageLoaderProps} from "next/dist/client/image";
import Poster from '../../../public/filme-poster.png'
import {useEffect} from "react";


export default function HomeScreen({movies, series, person}: any) {
  return (
    <div className={styles.home}>
      <PageTitle title={"Trending"} />
      <h1 className={styles.title}>
        404 - Not Found
      </h1>
    </div>
  );
}
