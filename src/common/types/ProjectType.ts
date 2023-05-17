type TechType = Array<string>;

type ProjectType = {
  name: string,
  client: string,
  client_url: string,
  link: string,
  date: string,
  short: string,
  info: string,
  tech: Array<TechType>,
  photos: Array<string>,
};

export type { ProjectType };