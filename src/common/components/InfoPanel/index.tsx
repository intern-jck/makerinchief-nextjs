import Link from 'next/link';
import type { ProjectType } from '@/common/types';
import styles from './InfoPanel.module.scss';

type Props = {
  project: ProjectType,
}

export default function InfoPanel({ project }: Props) {
  
  return (
    <div className={styles.infoPanel}>
      <div className={styles.infoRow}>
        <h3>NAME: <span>{project.name}</span></h3>
      </div>
      <div className={styles.infoRow}>
        <h3>CLIENT: <span>{project.client.name}</span></h3>
      </div>
      <div className={styles.infoRow}>
        <h3>DATE: 
          <span> {project.date.start_month} {project.date.start_year}</span> - 
          <span> {project.date.end_month} {project.date.end_year}</span>
        </h3>
      </div>
      <div className={styles.infoRow}>
        <h3>TECH: <span>{project.tech.map((tech, i) => (<Link key={i} href={tech[1]}>{tech[0]}</Link>))}</span></h3>
      </div>
      <div className={styles.infoRow}>
        <h3>INFO: <span>{project.info}</span></h3>
      </div>
    </div>
  );
};
