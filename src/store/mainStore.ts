import { makeAutoObservable, runInAction } from 'mobx';
import { SpecializationEnum, TechEnum } from './types';

class MainStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
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
}

const mainStore = new MainStore();

export default mainStore;
