import DefaultPage from "components/patterns/DefaultPage";
import Section from "components/patterns/Section";
import {MediaItemData} from "types/media";

export default function MovieVideos(props:MediaItemData) {
  return (
    <DefaultPage title={"Trending Media"}>
      <Section title={""}>
        <MovieVideos {...props} />
      </Section>
    </DefaultPage>
  )
}