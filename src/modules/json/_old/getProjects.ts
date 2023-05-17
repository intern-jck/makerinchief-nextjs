import axios from 'axios';

const projectsURL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/work.json';

export default async function getProjects() {
  try {
    const response = await axios.get(projectsURL);
    const projects = await response.data;
    return projects;
  } catch (error) {
    console.log('get projects error:', error)
    return error;
  }
};

// export async function getProjectPaths() {
//   try {
//     const projects = await getProjects();
//     const projectPaths = [];
//     for (let i = 0; i < projects.length; i++) {
//       projectPaths.push({ 'slug': projects[i].link });
//     };

//     return projectPaths;
//   } catch (error) {
//     console.log('get photos error:', error)
//     return error;
//   }
// };