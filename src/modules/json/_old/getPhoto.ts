import axios from 'axios';


export async function getPhoto(photoId: string) {
  try {
    const response = await axios.get(photosURL);
    const photos = await response.data;
    return photos;
  } catch (error) {
    console.log('get photos error:', error)
    return error;
  }
}
