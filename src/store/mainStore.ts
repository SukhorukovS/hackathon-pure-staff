import {makeAutoObservable} from 'mobx';
import {ICompanyData, IPeopleData, IStateCompanyData, IStatePeopleData, SpecializationEnum, TechEnum} from './types';
import {requestGetCompany, requestGetPeople} from "../api";
import {AxiosResponse} from "axios";

class MainStore {
  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  peopleData: IStatePeopleData = {
    loading: false,
    error: '',
    data: [],
  }

  companyData: IStateCompanyData = {
    loading: false,
    error: '',
    data: [],
  }

  specializationList: SpecializationEnum[] = [
    SpecializationEnum.Back,
    SpecializationEnum.Front,
    SpecializationEnum.QA,
    SpecializationEnum.DevOps,
    SpecializationEnum.Mobile,
  ];

  techList: TechEnum[] = [
    TechEnum['1C'],
    TechEnum.Android,
    TechEnum.Angular,
    TechEnum['C#'],
    TechEnum['C++'],
    TechEnum.Docker,
    TechEnum.Flutter,
    TechEnum.Java,
    TechEnum.JavaScript,
    TechEnum.Kotlin,
    TechEnum.NodeJS,
    TechEnum.PHP,
    TechEnum.Python,
    TechEnum.React,
    TechEnum.ReactNative,
    TechEnum.Swift,
    TechEnum.Vue
  ]

  async getPeople() {
    this.peopleData.loading = true;
    try {
      const {data} = await requestGetPeople() as AxiosResponse;
      const {elements} = data
      this.peopleData.data = elements as IPeopleData[];
      this.peopleData.loading = false;
    } catch (e) {
      this.peopleData.error = e;
      this.peopleData.loading = false;
      console.error(e);
    }
  }

  async getCompany() {
    this.companyData.loading = true;
    try {
      const {data} = await requestGetCompany() as AxiosResponse;
      const {elements} = data
      this.companyData.data = elements as ICompanyData[];
      this.companyData.loading = false;
    } catch (e) {
      this.companyData.error = e;
      this.companyData.loading = false;
      console.error(e);
    }
  }

}

const mainStore = new MainStore();

export default mainStore;
