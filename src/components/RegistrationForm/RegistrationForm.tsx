import { FC, PropsWithChildren } from "react"

import { useForm, SubmitHandler } from "react-hook-form"

import { CompanyForm } from "./CompanyForm/CompanyForm"

enum GenderEnum {
  female = "female",
  male = "male",
}

interface IFormInput {
  firstName: string
  gender: GenderEnum
}

type FormExtensions = {
  Company: typeof CompanyForm;
  Employer: typeof EmployerForm
};

const EmployerForm: FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <label className="label">ФИО</label>
      <input {...register("firstName")} className="input" />
      <label>Пол</label>
      <select {...register("gender")}>
        <option value="female">Ж</option>
        <option value="male">М</option>
      </select>
      <div className="my-4">
        <button type="submit" className="submit">
          Войти
        </button>
      </div>
    </form>
  )
}

export const RegistrationForm: FC<PropsWithChildren> & FormExtensions = ({children}) => {
  return (
    <div className="w-56 my-8 mx-auto">
      {children}
    </div>
  )
}

RegistrationForm.Company = CompanyForm;
RegistrationForm.Employer = EmployerForm
