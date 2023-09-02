import { makeAutoObservable, runInAction } from 'mobx';

class MainStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  specializationList = [
    'Back',
    'Front',
    'QA',
    'DevOps',
    'Mobile',
  ]
}

const mainStore = new MainStore();

export default mainStore;
