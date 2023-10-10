import {NextApiRequest, NextApiResponse} from "next";
import {getMovieVideos} from "data/movie";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const id = String(req.query.id);
  const response = await getMovieVideos(id);
  if (response) {
    res.status(response!.status).json(response!.data);
  } else {
    res.status(500);
  }
}
