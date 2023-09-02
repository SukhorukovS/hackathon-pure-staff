import { makeAutoObservable, runInAction } from 'mobx';
import { SpecializationEnum } from './types';

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
  ]
}

const mainStore = new MainStore();

export default mainStore;
