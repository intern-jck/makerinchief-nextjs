import type { KitType } from '@/common/types';
// import Link from 'next/link';
// import styles from './InfoPanel.module.scss';

import { FaYoutube, FaGithub } from 'react-icons/fa';

const repoIcons = {
  'youtube' : <FaYoutube />,
  'github': <FaGithub />,
};


type Props = {
  className: string,
  kit: KitType,
}

export default function InfoPanel({ className, kit }: Props) {
  
  return (
    <div className={className}>
      <div className={'info-row'}>
        <h3>NAME: <span>{kit.name}</span></h3>
      </div>
      <div className={'info-row'}>
        <h3>TECH:  
          <span className={'tech-list'}>
          {
            kit.tech.map((tech, i) => (
              <a key={i} className={'tech'} href={tech.url} target={'_blank'}>
                {tech.name}
              </a>))
          }
          </span>
        </h3>
      </div>
      <div className={'info-row'}>
        <h3>INFO: <span>{kit.info}</span></h3>
      </div>
      <div className={'info-row'}>
        <h3>REPOS:  
          <span className={'repo-list'}>
          {
            kit.repos.map((repo, i) => (
              <a key={i} className={'repo'} href={repo.url} target={'_blank'}>
                {/* {repo.name} */}
                {repoIcons[repo.key]}
              </a>))
          }
          </span>
        </h3>
      </div>
    </div>
  );
};
