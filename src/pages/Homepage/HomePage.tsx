import { useState } from "react"
import { Layout } from "../../components/Layout/Layout"
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm"
import { DropDownSelect } from "./DropDownSelect/DropDownSelect"

const HomePage = () => {
  const [formState, setFormState] = useState<string>('Company')

  return (
    <Layout>
      <DropDownSelect setForm={setFormState} />
      <RegistrationForm>
        {formState === 'Company' && <RegistrationForm.Company />}
        {formState === 'Employer' && <RegistrationForm.Employer />}
      </RegistrationForm>
    </Layout>
  )
}

export default HomePage
