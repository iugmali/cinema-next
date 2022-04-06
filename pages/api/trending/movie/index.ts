import {getTrendingMovies} from "data/trending";
import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const response = await getTrendingMovies();
  res.status(200).json(response);
}