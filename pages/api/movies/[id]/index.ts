import {NextApiRequest, NextApiResponse} from "next";
import {getMovieDetails} from "data/movie";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const id = String(req.query.id);
  const response = await getMovieDetails(id);
  res.status(200).json(response);
}