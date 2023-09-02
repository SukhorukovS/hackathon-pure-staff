import { FC } from "react"

import { useForm, SubmitHandler } from "react-hook-form"

import { observer } from "mobx-react-lite"

import { SpecializationEnum } from "../../../store/types"
import mainStore from "../../../store/mainStore"

interface IFormInput {
  name: string
  specialization: SpecializationEnum
  aboutMe: string
  technologyStack: string
}

export const EmployerForm: FC = observer(() => {
  const { register, handleSubmit } = useForm<IFormInput>()

  const { specializationList, techList } = mainStore;

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <label className="label">ФИО</label>
      <input {...register("name")} className="input" />
      <label>Пол</label>
      <div className="my-4">
        <label className="label">Специализация</label>
        <select {...register("specialization")} className="select">
          {specializationList.map(specialization => (
            <option key={specialization} value={specialization}>{specialization}</option>
          ))}
        </select>
      </div>
      <div className="my-4">
        <label className="label">Технологии</label>
        <input {...register("technologyStack")} className="input" />
        <select {...register("technologyStack")} className="select" multiple>
          {techList.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>
      <div className="my-4">
        <label className="label">Обо мне</label>
        <textarea {...register("aboutMe")} rows={3} className="textarea"></textarea>
      </div>
      <div className="my-4">
        <button type="submit" className="submit">
          Войти
        </button>
      </div>
    </form>
  )
})
