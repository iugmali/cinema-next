import {MediaItem} from "./media";

export interface Serie extends MediaItem{
  name: string;
  first_air_date: string;
}