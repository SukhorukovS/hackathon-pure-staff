export enum SpecializationEnum {
  'Back' = 'Back',
  'Front' = 'Front',
  'QA' = 'QA',
  'DevOps' = 'DevOps',
  'Mobile' = 'Mobile',
}

export enum TechEnum {
  'React' = 'React',
  'ReactNative' = 'ReactNative',
  'Vue' = 'Vue',
  'NodeJS' = 'NodeJS',
  'Angular' = 'Angular',
  '1C' = '1C',
  'C++' = 'C++',
  'C#' = 'C#',
  'Android' = 'Android',
  'Docker' = 'Docker',
  'Kotlin' = 'Kotlin',
  'Java' = 'Java',
  'Flutter' = 'Flutter',
  'JavaScript' = 'JavaScript',
  'PHP' = 'PHP',
  'Python' = 'Python',
  'Swift' = 'Swift'
}

export interface IState {
  loading: boolean;
  error: unknown;
}

export interface IStatePeopleData extends IState {
  data: IPeopleData[]
}

export interface IPeopleData {
  id: string;
  photo: string;
  name: string;
  specialization: string;
  technologyStack: string[];
  aboutMe: string;
}

export interface IStateCompanyData extends IState{
 data: ICompanyData[];
}

export interface ICompanyData {
  id: string;
  rating: number;
  company: string | null;
  jobTitle: string;
  foundation: number;
  specialization: string;
  requirements: string[];
  description: string;
  photo: string;
  payFork: number;
}

export interface IResponse  {
  elements: unknown[];
  size: number;
  total_page: number;
}

export interface IMatchPeople {
  entity: Record<string, string>;
  matches: boolean;
}
