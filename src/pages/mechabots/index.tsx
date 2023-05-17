import type { ProjectType } from '@/common/types';
import { Card } from '@/common/components';
import styles from './Work.module.scss';

import useSWR from 'swr';
import fetcher from '@/modules/utils/fetcher';

type Props = {
  projects: ProjectType[],
};

export default function Work() {

  const { data, error } = useSWR<Array<ProjectType>>('/api/work', fetcher);

  return (
    <>
      <div className='page-header'>
        <h1>Work</h1>
        <h2>Professional Work</h2>
      </div>

      <div className='page-content'>

        <div className={styles.workContent}>
          {
            data ?
            data.map((work, i) => {
              return (
                <Card
                  key={i}
                  className={styles.workCard}
                  cardTitle={work.name}
                  cardImage={work.photos[0]}
                  cardText={work.short}
                  cardLink={`/work/${work.link}`}
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
