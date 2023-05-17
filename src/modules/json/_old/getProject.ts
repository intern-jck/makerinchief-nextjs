import axios from 'axios';

const projectsURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/work.json';

export async function getProject(slug: string) {
  try {
    const response = await axios.get(projectsURL);
    const projects = await response.data;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].link === slug) {
        return projects[i];
      }
    }
    return undefined;
  } catch (error) {
    console.log('get projects error:', error)
    return error;
  }
}
