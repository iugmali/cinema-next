import styles from './MoviesItem.module.scss';
import React from "react";
import {Movie} from "types/movie";
import PageLink from "components/PageLink";
import Image from "next/image";
import classNames from "classnames";
import ImageLoader from "../../../utils/ImageLoader";


interface Props extends Movie {
  displayItem: boolean;
  blurDataUrl: string;
}

const MoviesItem = (movie: Props) => {
  const releaseYear = movie.release_date ? movie.release_date.slice(0,4) : "";
  const releaseOverview = movie.release_date ? `${movie.release_date.slice(7,2)} / ${movie.release_date.slice(5,2)} / ${movie.release_date.slice(0,4)} - ${movie.overview}` : "";
  return (
    <article className={styles.item}>
      <PageLink to={`/movies/${movie.id}`} prefetch={false}>
        <div className={styles.item__image__mobile}>
          <Image
            className={styles.item__image}
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
            className={styles.item__image}
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

      </PageLink>
    </article>
  )
}
export default MoviesItem;
