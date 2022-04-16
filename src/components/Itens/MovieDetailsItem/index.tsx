import styles from './MovieDetailsItem.module.scss';
import React from "react";
import {Movie} from "types/movie";
import Image from "next/image";
import classNames from "classnames";
import ImageLoader from "../../../utils/ImageLoader";

interface Props extends Movie {
  displayItem: boolean;
  blurDataUrl: string;
}

const MovieDetailsItem = (movie: Props) => {
  const releaseYear = movie.release_date ? movie.release_date.slice(0,4) : "";
  const releaseOverview = movie.release_date ? `${movie.release_date.slice(8,10)}/${movie.release_date.slice(5,7)}/${movie.release_date.slice(0,4)} - ${movie.overview}` : "";
  return (
    <article className={styles.item}>
        <div className={styles.item__image__mobile}>
          <Image
            loader={ImageLoader}
            src={movie.backdrop_path}
            alt={movie.title}
            placeholder={"blur"}
            blurDataURL={movie.blurDataUrl}
            width={500}
            height={281}
            priority={true}
          />
        </div>
        <div className={styles.item__image__desktop}>
          <Image
            loader={ImageLoader}
            src={movie.poster_path}
            alt="Poster do Filme"
            placeholder={"blur"}
            blurDataURL={movie.blurDataUrl}
            width={236}
            height={354}
            priority={true}
          />
        </div>
        <div className={styles.item__descricao}>
          <h3 className={styles.item__title}>{movie.title}</h3>
          <p className={classNames({
            [styles.item__details]: true,
            [styles['item__descricao__overview']]: movie.displayItem,
          })}>
            {movie.displayItem ? releaseOverview : releaseYear}
          </p>
        </div>
    </article>
  )
};
export default MovieDetailsItem;