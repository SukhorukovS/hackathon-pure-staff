import { FC, Fragment } from "react"
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router-dom';

import { useForm, SubmitHandler } from "react-hook-form"
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

import { SpecializationEnum } from "../../../store/types"
import mainStore from "../../../store/mainStore"
import { regAsVacancy } from "../../../api"

interface IFormInput {
  jobTitle: string
  specialization: SpecializationEnum
  requirements: string[]
  payFork: number
}

export const CompanyForm: FC = observer(() => {
  const {
    register,
    handleSubmit,
    setValue,
    watch
  } = useForm<IFormInput>();

  const navigate = useNavigate();

  const { specializationList, techList, setCompanyId } = mainStore

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await regAsVacancy(data);
    setCompanyId(response.id)
    navigate('/find-people')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
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
        <Listbox
          as='div'
          name="requirements"
          onChange={(selectedOption) =>
            setValue('requirements', selectedOption)
          }
          value={watch('requirements')}
          multiple
          className="relative mt-1"
        >
          <Listbox.Button className="select relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            {watch('requirements')?.join(', ') || 'Выберите технологию'}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="options">
              {techList.map(item => (
                <Listbox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-300 text-white' : 'text-gray-900 dark:text-white'
                    }`
                  }
                >
                  {({selected}) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-100 dark:text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>

        </Listbox>
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
