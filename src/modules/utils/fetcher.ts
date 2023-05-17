import axios from 'axios';

export default async function fetcher(url:string) {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch(error) {
    console.error(error);
    return error;
  }
};
