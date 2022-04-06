import {getTrendingPerson} from "data/trending";
import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const response = await getTrendingPerson();
  res.status(200).json(response);
}