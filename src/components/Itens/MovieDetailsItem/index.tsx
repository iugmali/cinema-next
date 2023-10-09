import styles from './MovieDetailsItem.module.scss';
import React from "react";
import {Movie} from "types/movie";
import Image from "next/image";
import classNames from "classnames";
import ImageLoader from "../../../utils/ImageLoader";
import PageLink from "../../PageLink";
import {useRouter} from "next/router";

interface Props extends Movie {
  displayItem: boolean;
  blurDataUrl: string;
}

const MovieDetailsItem = (movie: Props) => {
  const {query, back} = useRouter();
  const releaseYear = movie.release_date ? movie.release_date.slice(0,4) : "";
  const releaseOverview = movie.release_date ? `${movie.release_date.slice(8,10)}/${movie.release_date.slice(5,7)}/${movie.release_date.slice(0,4)} - ${movie.overview}` : "";
  return (
    <article className={styles.item}>
        <div className={styles.item__image__wrapper}>
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
        <div className={styles.item__descricao}>
          <h3 className={styles.item__descricao__title}>{movie.title}</h3>
          <p className={classNames({
            [styles.item__descricao__details]: true,
            [styles['item__descricao__overview']]: movie.displayItem,
          })}>
            {movie.displayItem ? releaseOverview : releaseYear}
          </p>
          <div className={styles.item__descricao__links}>
            <a className={styles.item__descricao__link} href={'#'} onClick={() => back()}>Back</a>
            <PageLink className={styles.item__descricao__link} to={`/movies/${query.id}/videos`}>Vídeos</PageLink>
          </div>
        </div>
    </article>
  )
};
export default MovieDetailsItem;
