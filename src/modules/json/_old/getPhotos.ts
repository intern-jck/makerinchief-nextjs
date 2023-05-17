import axios from 'axios';

const photosURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/photos.json';

export async function getPhotos() {
  try {
    const response = await axios.get(photosURL);
    const photos = await response.data;
    return photos;
  } catch (error) {
    console.log('get photos error:', error)
    return error;
  }
}