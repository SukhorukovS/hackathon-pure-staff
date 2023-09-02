import { FC } from "react"
import { observer } from "mobx-react-lite"

import { useForm, SubmitHandler } from "react-hook-form"

import { SpecializationEnum } from "../../../store/types"
import mainStore from "../../../store/mainStore"

interface IFormInput {
  companyName: string
  jobTitle: string
  specialization: SpecializationEnum
  requirements: string
  payFork: number
}

export const CompanyForm: FC = observer(() => {
  const { register, handleSubmit } = useForm<IFormInput>()

  const { specializationList, techList } = mainStore

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="my-4">
        <label className="label">Название компании</label>
        <input {...register("companyName")} className="input" />
      </div>
      <div className="my-4">
        <label className="label">Вакансия</label>
        <input {...register("jobTitle")} className="input" />
      </div>
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
        <select {...register("requirements")} className="select" multiple>
          {techList.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>
      <div className="my-4">
        <label className="label">Зарплатная вилка</label>
        <input {...register("payFork")} type="number" className="input" />
      </div>

      <div className="my-4">
        <button type="submit" className="submit">
          Войти
        </button>
      </div>
    </form>
  )
})
