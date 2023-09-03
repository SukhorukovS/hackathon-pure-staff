import {makeAutoObservable, runInAction} from 'mobx';
import {IPeopleData, SpecializationEnum, TechEnum} from './types';
import {requestGetPeople} from "../api";

class MainStore {
  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  peopleData: IPeopleData[] = []

  companyId: string | null = null;

  staffId: string | null = null;

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

  setCompanyId(companyId: string) {
    runInAction(() => {
      this.companyId = companyId
    })
  }

  setStaffId(staffId: string) {
    runInAction(() => {
      this.staffId = staffId
    })
  }
}

const mainStore = new MainStore();

export default mainStore;
