import { Carousel, InfoPanel } from '@/common/components/';
import { getJsonDataFromUrl } from '@/modules/json';
import type { MechabotType } from '@/common/types/';
import styles from './MechabotSlug.module.scss';

type Props = {
  mechabot: MechabotType,
};

export default function MechaBot({ mechabot }: Props) {
  console.log(mechabot)

  return (
    <>
      <div className='page-content'>
        <div className={styles.mechabotContent}>
          <div className={styles.mechabotCarousel}>
            <Carousel slides={mechabot.photos} />
          </div>
          <div className={styles.mechabotInfoPanel}>
            <InfoPanel mechabot={mechabot} />
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
  
  const _mechabots = await getJsonDataFromUrl(process.env.GITHUB_MECHABOTS_JSON_URL!);

  const mechabot = _mechabots.filter((mechabot: MechabotType) => {
    if (mechabot.link === params.slug) {
      return mechabot;
    };
  })[0];

  return {
    props: { mechabot }
  }
};

export async function getStaticPaths() {

  const _mechabots = await getJsonDataFromUrl(process.env.GITHUB_MECHABOTS_JSON_URL!);

  return {
    paths: _mechabots.map((mechabot: MechabotType) => {
      return {
        params: {
          slug: mechabot.link,
        },
      }
    }),
    fallback: false,
  }
};
