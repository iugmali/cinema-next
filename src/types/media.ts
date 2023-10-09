import {Serie} from "./serie";
import {Movie} from "./movie";
import {Person} from "./person";

export interface MediaVideoItem {
  iso_639_1?: string;
  iso_3166_1?: string;
  name: string;
  key?: string;
  site: string;
  size?: string;
  type?: string;
  official?: string;
  published_at?: string;
  id: string;
}

export interface MediaItem {
  success?: boolean;
  first_air_date?: string;
  release_date?: string;
  title?: string;
  name?: string;
  id: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}
export interface VideoItemData {
  videos?: MediaVideoItem[];
}
export interface MediaItemData {
  movies?: {
    results: Movie[]
  };
  series?: {
    results: Serie[]
  };
  people?: {
    results: Person[]
  };
  videos?: {
    results: MediaVideoItem[]
  };
}
