import axios from 'axios';

const codeURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/code.json';

export async function getCode() {  
  try {
    const response = await axios.get(codeURL);
    const code = await response.data;
    return code;
  } catch (error) {
    console.log('get photos error:', error)
    return error;
  }
};
