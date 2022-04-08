import {ImageLoaderProps} from "next/dist/client/image";

export default function ImageLoader ({src}: ImageLoaderProps) {
  return `https://image.tmdb.org/t/p/w500${src}`
}