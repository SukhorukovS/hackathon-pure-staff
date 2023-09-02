import { FC, PropsWithChildren } from "react"

import { CompanyForm } from "./CompanyForm/CompanyForm"
import { EmployerForm } from "./EmloyerForm/EmployerForm";

type FormExtensions = {
  Company: typeof CompanyForm;
  Employer: typeof EmployerForm
};

export const RegistrationForm: FC<PropsWithChildren> & FormExtensions = ({children}) => {
  return (
    <div className="w-80 my-8 mx-auto py-4 px-4 border rounded-lg">
      {children}
    </div>
  )
}

RegistrationForm.Company = CompanyForm;
RegistrationForm.Employer = EmployerForm
