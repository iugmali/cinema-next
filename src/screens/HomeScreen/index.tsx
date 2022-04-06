import styles from './HomeScreen.module.scss';
import PageTitle from "components/PageTitle";
import Image from 'next/image';
import {ImageLoaderProps} from "next/dist/client/image";
import classNames from "classnames";

const myLoader = ({src,width,quality}: ImageLoaderProps) => {
  return `https://image.tmdb.org/t/p/w500${src}`
}
interface Props {
  movies: any;
  series: any;
  people: any;
}
export default function HomeScreen({movies, series, people}: Props) {
  return (
    <div className={styles.home}>
      <PageTitle title={"Trending"} />
      <h1 className={styles.title}>
        Trending
      </h1>
      <div className={classNames(styles.section, styles['section--movies'])}>
        <h2 className={styles.section__title}>
          Movies
        </h2>
        <ul className={styles.section__itens}>
          {
            movies.results.map(movie => (
              <li key={movie.id} className={styles.section__item}>
                <div className={styles.section__item__image__mobile}>
                  <Image
                    loader={myLoader}
                    src={movie.backdrop_path}
                    alt="Poster do Filme"
                    placeholder={"blur"}
                    blurDataURL={"/filme-poster.png"}
                    width={400}
                    height={200}
                  />
                </div>
                <div className={styles.section__item__image__desktop}>
                  <Image
                    loader={myLoader}
                    src={movie.poster_path}
                    alt="Poster do Filme"
                    placeholder={"blur"}
                    blurDataURL={"/filme-poster.png"}
                    width={350}
                    height={600}
                  />
                </div>
                <h3 className={styles.section__item__title}>{movie.title} - ({movie.release_date})</h3>
                <p className={styles.section__item__descricao}>{movie.overview}</p>
              </li>
            ))

          }
        </ul>
      </div>
      <div className={classNames(styles.section, styles['section--series'])}>
        <h2 className={styles.section__title}>
          Series
        </h2>
        <ul className={styles.section__itens}>
          {
            series.results.map(serie => (
              <li key={serie.id} className={styles.section__item}>
                <div className={styles.section__item__image__mobile}>
                  <Image
                    loader={myLoader}
                    src={serie.backdrop_path}
                    alt="Poster da Serie"
                    placeholder={"blur"}
                    blurDataURL={"/filme-poster.png"}
                    width={400}
                    height={200}
                  />
                </div>
                <div className={styles.section__item__image__desktop}>
                  <Image
                    loader={myLoader}
                    src={serie.poster_path}
                    alt="Poster da Serie"
                    placeholder={"blur"}
                    blurDataURL={"/filme-poster.png"}
                    width={236}
                    height={354}
                  />
                </div>
                <h3 className={styles.section__item__title}>{serie.name} - ({serie.first_air_date})</h3>
                <p className={styles.section__item__descricao}>{serie.overview}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={classNames(styles.section, styles['section--people'])}>
        <h2 className={styles.section__title}>
          People
        </h2>
        <ul className={styles.section__itens}>
          {
            people.results.map(person => (
              <li key={person.id} className={styles.section__item}>
                <div className={classNames(styles.section__item__image__mobile, styles.section__item__image__desktop)}>
                  <Image
                    loader={myLoader}
                    src={person.profile_path}
                    alt="Imagem da Pessoa"
                    placeholder={"blur"}
                    blurDataURL={"/filme-poster.png"}
                    layout="intrinsic"
                    width={236}
                    height={354}
                  />
                </div>
                <h3 className={styles.section__item__title}>{person.name}</h3>
                <h3 className={styles.section__item__title}>({person.known_for_department})</h3>
                <p className={styles.section__item__descricao}>Fez parte de {(person.known_for[0].media_type === "movie") ? person.known_for[0].title : person.known_for[0].name}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
