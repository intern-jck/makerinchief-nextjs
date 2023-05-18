import axios from 'axios';

const GITHUB_MECHABOTS_JSON_URL = process.env.GITHUB_MECHABOTS_JSON_URL;

export async function handler(slug: string) {
  try {
    const response = await axios.get(GITHUB_MECHABOTS_JSON_URL!);
    const mechabots = await response.data;

    for (let i = 0; i < mechabots.length; i++) {
      if (mechabots[i].link === slug) {
        return mechabots[i];
      }
    }
    return undefined;
  } catch (error) {
    console.log('get mechabots error:', error)
    return error;
  }
}
