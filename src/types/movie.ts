import {MediaItem, MediaVideoItem} from "./media";

export interface Movie extends MediaItem{
  title: string;
  release_date: string;
}

export interface MovieVideoItem extends MediaVideoItem {
  name: string;
  site: string;
  key: string;
}