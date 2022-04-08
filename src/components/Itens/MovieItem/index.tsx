import styles from './MovieItem.module.scss';
import React from "react";
import {Movie} from "types/movie";
import PageLink from "components/PageLink";
import Image from "next/image";
import ImageLoader from "../../../utils/ImageLoader";


const MovieItem = (movie: Movie) => {
  return (
    <li className={styles.item}>
      <PageLink to={`/movies/${movie.id}`} prefetch={false}>
        <div className={styles.item__image__mobile}>
          <Image
            loader={ImageLoader}
            src={movie.backdrop_path}
            alt="Poster do Filme"
            placeholder={"blur"}
            blurDataURL={"/filme-poster.png"}
            width={800}
            height={400}
          />
        </div>
        <div className={styles.item__image__desktop}>
          <Image
            loader={ImageLoader}
            src={movie.poster_path}
            alt="Poster do Filme"
            placeholder={"blur"}
            blurDataURL={"/filme-poster.png"}
            width={236}
            height={354}
          />
        </div>
        <h3 className={styles.item__title}>{movie.title}</h3>
        <h3 className={styles.item__title}>({movie.release_date.slice(0,4)})</h3>
        {/*<p className={styles.item__descricao}>{movie.overview}</p>*/}
      </PageLink>
    </li>
  )
}
export default MovieItem;