import { Carousel, InfoPanel } from '@/common/components/';
import type { KitType, PhotoType } from '@/common/types/';
import styles from './KitSlug.module.scss';

type Props = {
  kit: KitType,
  photos: string[],
};

export default function Kit({ kit, photos}: Props) {

  return (
    <>
      <div className='page-content'>

        <div className={styles.kitContent}>
          {/* <div className={styles.kitCarousel}> */}
            <Carousel className={styles.kitCarousel} slides={photos} />
          {/* </div> */}
          {/* <div className={styles.kitInfoPanel}> */}
            <InfoPanel className={styles.kitInfoPanel} kit={kit} />
          {/* </div> */}
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

  const response = await fetch(process.env.GITHUB_KITS_JSON_URL!);
  const data = await response.json();

  const kit = data.makerinchief.filter((kit: KitType) => {
    if (kit.slug === params.slug) {
      return kit;
    };
  })[0];

  const photos = kit ? kit.photos.map((photo: PhotoType) => (photo.url)) : [];

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
