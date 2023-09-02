import { useForm, SubmitHandler } from "react-hook-form"

const HomePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  
  return (
    <div className="container">
      Главная
    </div>
  )
}

export default HomePage
