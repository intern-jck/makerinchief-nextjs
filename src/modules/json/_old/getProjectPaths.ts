
export async function getProjectPaths() {
  try {
    const projects = await getProjects();
    const projectPaths = [];
    for (let i = 0; i < projects.length; i++) {
      projectPaths.push({ 'slug': projects[i].link });
    };

    return projectPaths;
  } catch (error) {
    console.log('get photos error:', error)
    return error;
  }
};