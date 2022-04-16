import DefaultPage from "components/patterns/DefaultPage";
import Section from "../../components/patterns/Section";
import {MovieDetailsData} from "../../types/movie";
import MovieDetailsItem from "../../components/Itens/MovieDetailsItem";

export default function MoviePage({movie}:MovieDetailsData) {
  if (movie)
  return (
      <DefaultPage title={movie.title ?? movie.name ?? ""} >
        <Section title={""}>
          <MovieDetailsItem blurDataUrl={"/filme-backdrop-path.png"} displayItem={true} {...movie} />
        </Section>
      </DefaultPage>
  )
}