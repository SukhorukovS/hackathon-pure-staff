// fake

import {getFetch, postFetchCamelCase, requestGet} from "../utils/fetch"

export const requestGetPeople = async () => {
  try {
    return requestGet('http://localhost:8000/api/v1/staff?page=0&size=10', {})
  } catch (e) {
    console.error(e);
  }
  // return new Promise(resolve => setTimeout(() => {
  //   resolve([
  //     {
  //       img: '',
  //       value: 1212,
  //       name: 'Bruno',
  //       age: '28',
  //       directions: 'Frontend(React)',
  //     },
  //     {
  //       img: 'https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //       value: 1212,
  //       name: 'Anna',
  //       age: '28',
  //       directions: 'Frontend(React)',
  //     },
  //     {
  //       img: 'https://images.unsplash.com/photo-1560547126-ccd9d56db8af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80',
  //       value: 1212,
  //       name: 'Bruno',
  //       age: '28',
  //       directions: 'Frontend(React)',
  //     },
  //   ])
  // }, 10))
}

export const requestGetCompany = () => {
  try {
    return requestGet('http://localhost:8000/api/v1/vacancies?page=0&size=10', {})
  } catch (e) {
    console.error(e);
  }
}


export const regAsVacancy = async (values) => {
  try {
    const response = await postFetchCamelCase('http://localhost:8000/api/v1/vacancies', values);

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const regAsStaff = async (values) => {
  try {
    const response = await postFetchCamelCase('http://localhost:8000/api/v1/staff', values)
    return response.data
  } catch (error) {
    console.error(error)
  }
}


export const matchPeople = async (staffId: string, vacancyId: string) => {
  return await getFetch(`http://localhost:8000/api/v1/matches/result-with-staff/${staffId}`, {}, {
    headers: {
      'Cache-Control': 'no-cache',
      vacancy_id: vacancyId
    }
  })
}

export const matchVacancy = async (staffId: string, vacancyId: string) => {
  return await getFetch(`http://localhost:8000/api/v1/matches/result-with-vacancy/${vacancyId}`, {}, {
    headers: {
      'Cache-Control': 'no-cache',
      staff_id: staffId
    }
  })
}
