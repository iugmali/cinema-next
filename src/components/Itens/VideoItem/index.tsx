import styles from "./VideoItem.module.scss";
import {MediaVideoItem} from "../../../types/media";

interface Props extends MediaVideoItem {
  videoKey?: string;
}

const VideoItem = (video: Props) => {
  return (
    <article className={styles.video}>
      <h3 className={styles.video__title}>
        {video.name}
      </h3>
      <div className={styles.video__wrapper}>
        <iframe
          width="370"
          height="208"
          src={`https://www.youtube.com/embed/${video.videoKey}?enablejsapi=1&origin=https://cinema-next-chi.vercel.app`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>
    </article>
  )
};

export default VideoItem;