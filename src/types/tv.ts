import {MediaItem} from "./media";

export interface TV extends MediaItem{
  name: string;
  first_air_date: string;
}
