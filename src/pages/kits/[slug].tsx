import { Carousel, InfoPanel } from '@/common/components/';
// import { getJsonDataFromUrl } from '@/modules/json';
import { KitType } from '@/common/types';
import styles from './KitSlug.module.scss';

type Props = {
  kit: KitType,
};

export default function WorkProjectComponent({ kit }: Props) {
  return (
    <>
      <div className='page-content'>
        <div className={styles.projectContent}>
          <div className={styles.workProjectCarousel}>
            <Carousel slides={project.photos} />
          </div>
          <div className={styles.workProjectInfoPanel}>
            <InfoPanel project={kit} />
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
  
  const _kits = await getJsonDataFromUrl(process.env.GITHUB_KITS_JSON_URL!);

  const kit = _kits.filter((kit: KitType) => {
    if (kit.link === params.slug) {
      return kit;
    };
  })[0];

  return {
    props: { kit }
  }
};

export async function getStaticPaths() {

  const _kits = await getJsonDataFromUrl(process.env.GITHUB_KITS_JSON_URL!);

  return {
    paths: _kits.map((kit: KitType) => {
      return {
        params: {
          slug: kit.link,
        },
      }
    }),
    fallback: false,
  }
};
