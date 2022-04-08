import styles from './MediaItem.module.scss';
import React from "react";
import {Movie} from "types/movie";
import PageLink from "components/PageLink";
import Image from "next/image";
import ImageLoader from "../../../utils/ImageLoader";
import classNames from "classnames";

interface Props extends Movie {
  displayItem?: boolean
}

const MediaItem = (movie: Props) => {
  return (
    <article className={styles.item}>
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
        <p className={classNames({
            [styles.item__descricao]: true,
            [styles['item__descricao__overview']]: movie.displayItem,
        })}>
          {movie.displayItem ? `${movie.release_date.slice(7,2)} / ${movie.release_date.slice(5,2)} / ${movie.release_date.slice(0,4)} - ${movie.overview}` : movie.release_date.slice(0,4)}
        </p>
      </PageLink>
    </article>
  )
}
export default MediaItem;