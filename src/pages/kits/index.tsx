import Image from 'next/image'
import Link from 'next/link';
import { Card } from '@/common/components';
import { KitType } from '@/common/types';
import styles from './Kits.module.scss';

// Url for products info
const GITHUB_KITS_JSON_URL = process.env.GITHUB_KITS_JSON_URL;

type Props = {
  kits: KitType[],
};

export default function Kits({ kits }: Props) {
  console.log(kits)
  return (
    <>
      <div className='page-header'>
        <h1>Kits</h1>

      </div>
      <div className='page-content'>
        <div className={styles.kitsContent}>
          {
            kits ?
            kits.map((kit, i) => {
              return (
                <Card
                  key={i}
                  className={styles.kitCard}
                  cardTitle={kit.name}
                  cardImage={kit.photos[0].url}
                  cardText={kit.short}
                  cardLink={`/kits/${kit.slug}`}
                />
              )
            })
            : <></>
          }
        </div>
      </div>
    </>
  )
};

export async function getStaticProps() {
  // const kits = await getJsonDataFromUrl(GITHUB_KITS_JSON_URL!);

  // const response = await fetch('https://raw.githubusercontent.com/intern-jck/jsons/main/kitsData2.json');
  const response = await fetch(GITHUB_KITS_JSON_URL!);
  const data = await response.json();
  // console.log(data.makerinchief)
  const kits = data.makerinchief.map((item) => ({
    slug: item.slug,
    name: item.name,
    short: item.short,
    info: item.info,
    photos: item.photos.slice(),
    tech: item.tech.slice(),
    repos: item.repos.slice()
  }));

  // const kits = [];

  return {
    props: { kits }
  }
};