import type { TechType, RepoType } from '@/common/types';

type KitType = {
  category: string,
  slug: string,
  name: string,
  short: string,
  info: string,
  photos: Array<string>,
  tech: Array<TechType>,
  repos: Array<RepoType>,
};

export type { KitType };
