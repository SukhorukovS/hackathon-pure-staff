import {makeAutoObservable} from 'mobx';
import {IPeopleData, SpecializationEnum, TechEnum} from './types';
import {requestGetPeople} from "../api";

class MainStore {
  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  peopleData: IPeopleData[] = []

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
    try {
      const data = await requestGetPeople();
      this.peopleData = data as IPeopleData[]
    } catch (e) {
      console.error(e)
    }
  }


}

const mainStore = new MainStore();

export default mainStore;
