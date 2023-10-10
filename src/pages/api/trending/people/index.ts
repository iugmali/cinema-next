import {getTrendingPeople} from "data/trending";
import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const response = await getTrendingPeople();
  if (response) {
    res.status(response!.status).json(response!.data);
  } else {
    res.status(500);
  }
}
