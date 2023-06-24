import { Carousel, InfoPanel } from '@/common/components/';
import { getJsonDataFromUrl } from '@/modules/json';
import type { KitType } from '@/common/types/';
import styles from './KitSlug.module.scss';

type Props = {
  kit: KitType,
  photos: string[],
};

export default function Kit({ kit }: Props) {
  console.log(kit);

  return (
    <>
      <div className='page-content'>
        <div className={styles.kitContent}>
          <div className={styles.kitCarousel}>
            <Carousel slides={kit.photos} />
          </div>
          <div className={styles.kitInfoPanel}>
            <InfoPanel kit={kit} />
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
  
  // const _projects = await getJsonDataFromUrl(process.env.GITHUB_KITS_JSON_URL!);
  const response = await fetch(process.env.GITHUB_KITS_JSON_URL!);
  const data = await response.json();

  const kit = data.makerinchief.filter((kit: KitType) => {
    if (kit.slug === params.slug) {
      return kit;
    };
  })[0];

  const photos = kit ? kit.photos.map((photo: string) => (photo.url)) : [];
  

  return {
    props: { kit, photos }
  }
};

export async function getStaticPaths() {

  const response = await fetch(process.env.GITHUB_KITS_JSON_URL!);
  const data = await response.json();

  return {
    paths: data.makerinchief.map((kit: KitType) => {
      return {
        params: {
          slug: kit.slug,
        },
      }
    }),
    fallback: false,
  }
};
