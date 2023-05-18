import type { MechabotType } from '@/common/types';
import { Card } from '@/common/components';
import styles from './Mechabots.module.scss';

import useSWR from 'swr';
import fetcher from '@/modules/utils/fetcher';

type Props = {
  mechabots: MechabotType[],
};

export default function MechaBots() {

  const { data, error } = useSWR<Array<MechabotType>>('/api/mechabots', fetcher);

  return (
    <>
      <div className='page-header'>
        <h1>Mechabots</h1>
      </div>

      <div className='page-content'>

        <div className={styles.mechabotsContent}>
          {
            data ?
            data.map((mechabot, i) => {
              return (
                <Card
                  key={i}
                  className={styles.mechaCard}
                  cardTitle={mechabot.name}
                  cardImage={mechabot.photos[0]}
                  cardText={mechabot.short}
                  cardLink={`/mechabots/${mechabot.link}`}
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
