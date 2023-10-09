import {NextApiRequest, NextApiResponse} from "next";
import {getMovieVideos} from "data/movie";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const id = String(req.query.id);
  const response = await getMovieVideos(id);
  res.status(200).json(response);
}