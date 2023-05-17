import Image from 'next/image'
import Link from 'next/link';

import { getJsonDataFromUrl } from '@/modules/json';
import styles from './Store.module.scss';

// Url for products info
// const GITHUB_PHOTOS_JSON_URL = process.env.GITHUB_PHOTOS_JSON_URL;

type Props = {
  kits: Array<string>,
};

export default function Store({ photos }: Props) {
  return (
    <>

      {/* <div className='page-header'>
        <h1>PHOTOGRAPHY</h1>
      </div> */}

      <div className='page-content'>
        <div className={styles.photosContent}>
          {
            photos.map((photo, i) => {
              return (
                <Link href={'#'} key={i} className={styles.photoContainer}>
                  <Image
                    src={photo}
                    alt="Card image not found"
                    width={0}
                    height={0}
                    // fill
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    style={{ width: '100%', height: '100%' }} 
                  />
                </Link>
              )
            })
          }
        </div>
      </div>
    </>
  )
};

export async function getStaticProps() {
  const photos = await getJsonDataFromUrl(GITHUB_PHOTOS_JSON_URL!);
  return {
    props: { photos }
  }
};