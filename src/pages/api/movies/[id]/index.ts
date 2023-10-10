import {NextApiRequest, NextApiResponse} from "next";
import {getMovieDetails} from "data/movie";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const id = String(req.query.id);
  const response = await getMovieDetails(id);
  if (response) {
    res.status(response!.status).json(response!.data);
  } else {
    res.status(500);
  }
}
