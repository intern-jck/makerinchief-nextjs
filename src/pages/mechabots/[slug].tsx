import { Carousel, InfoPanel } from '@/common/components/';
import { getJsonDataFromUrl } from '@/modules/json';
import type { ProjectType } from '@/common/types/';
import styles from './WorkSlug.module.scss';

type Props = {
  project: ProjectType,
};

export default function WorkProjectComponent({ project }: Props) {

  return (
    <>
      <div className='page-content'>
        <div className={styles.projectContent}>
          <div className={styles.workProjectCarousel}>
            <Carousel slides={project.photos} />
          </div>
          <div className={styles.workProjectInfoPanel}>
            <InfoPanel project={project} />
          </div>
        </div>
      </div>
    </>
  );
};

type ParamsType = {
  params: {
    slug: string,
  }
};

export async function getStaticProps({ params }: ParamsType) {
  
  const _projects = await getJsonDataFromUrl(process.env.GITHUB_WORK_JSON_URL!);

  const project = _projects.filter((project: ProjectType) => {
    if (project.link === params.slug) {
      return project;
    };
  })[0];

  return {
    props: { project }
  }
};

export async function getStaticPaths() {

  const _projects = await getJsonDataFromUrl(process.env.GITHUB_WORK_JSON_URL!);

  return {
    paths: _projects.map((project: ProjectType) => {
      return {
        params: {
          slug: project.link,
        },
      }
    }),
    fallback: false,
  }
};
