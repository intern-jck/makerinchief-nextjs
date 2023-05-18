import Link from 'next/link';
import type { MechaBotType } from '@/common/types';
import styles from './InfoPanel.module.scss';

type Props = {
  mechabot: MechaBotType,
}

export default function InfoPanel({ mechabot }: Props) {
  
  return (
    <div className={styles.infoPanel}>
      <div className={styles.infoRow}>
        <h3>NAME: <span>{mechabot.name}</span></h3>
      </div>
      <div className={styles.infoRow}>
        {/* <h3>TECH: <span>{mechabot.tech.map((tech, i) => (<Link key={i} href={tech[1]}>{tech[0]}</Link>))}</span></h3> */}
      </div>
      <div className={styles.infoRow}>
        <h3>INFO: <span>{mechabot.info}</span></h3>
      </div>
    </div>
  );
};
