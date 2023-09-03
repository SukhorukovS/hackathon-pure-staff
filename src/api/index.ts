// fake

export const requestGetPeople =  async () => {
  return new Promise(resolve => setTimeout(() => {
    resolve([
      {
        img: 'https://images.unsplash.com/photo-1630254688956-40da9f30216a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
        value: 1212,
        name: 'Bruno',
        age: '28',
        directions: 'Frontend(React)',
      },
      {
        img: 'https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        value: 1212,
        name: 'Anna',
        age: '28',
        directions: 'Frontend(React)',
      },
      {
        img: 'https://images.unsplash.com/photo-1560547126-ccd9d56db8af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80',
        value: 1212,
        name: 'Bruno',
        age: '28',
        directions: 'Frontend(React)',
      },
    ])
  }, 10))
}
