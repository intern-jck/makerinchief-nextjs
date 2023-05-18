import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

const GITHUB_MECHABOTS_JSON_URL = process.env.GITHUB_MECHABOTS_JSON_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(GITHUB_MECHABOTS_JSON_URL!);
    const jsonData = await response.data;
    res.status(200).json(jsonData);
    return true;
  } catch(error) {
    console.error(error);
    return res.status(500).json({ msg: 'mechabots json not found'});
  }
};
