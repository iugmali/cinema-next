import DefaultPage from "components/patterns/DefaultPage";
import Section from "components/patterns/Section";
import {MediaItemList} from "types/media";

export default function MovieVideos(props:MediaItemList) {
  return (
    <DefaultPage title={"Trending Media"}>
      <Section title={""}>
        <MovieVideos {...props} />
      </Section>
    </DefaultPage>
  )
}