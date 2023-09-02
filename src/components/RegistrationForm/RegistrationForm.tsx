import { FC } from "react"

import { useForm, SubmitHandler } from "react-hook-form"

enum GenderEnum {
  female = "female",
  male = "male",
}

interface IFormInput {
  firstName: string
  gender: GenderEnum
}

export const RegistrationForm: FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="label">First Name</label>
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
