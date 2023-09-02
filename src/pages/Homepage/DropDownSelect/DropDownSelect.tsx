import { FC } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ArchiveBoxIcon } from '@heroicons/react/20/solid'
import { AcademicCapIcon } from '@heroicons/react/24/solid'

export const DropDownSelect: FC<{setForm: (member: string) => void}> = ({setForm}) => {
  return (
    <div className="w-full text-right">
      <Menu as="div" className="relative my-0 mx-auto text-left">
        <div className="flex justify-center">
          <Menu.Button
            className="flex w-56 justify-center self-center rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {({open}) => (
              <>
                Войти как:
                <ChevronDownIcon
                  className={`ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100 ${open && 'rotate-180'}`}
                  aria-hidden="true"
                />
              </>

            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute top-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-300 text-white' : 'text-gray-800'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => setForm('Company')}
                    >
                      {active ? (
                        <ArchiveBoxIcon
                          className="mr-2 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArchiveBoxIcon
                          className="mr-2 h-5 w-5 text-blue-300"
                          aria-hidden="true"
                        />
                      )}
                      Компания
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-300 text-white' : 'text-gray-800'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => setForm('Employer')}
                    >
                      {active ? (
                        <AcademicCapIcon
                          className="mr-2 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <AcademicCapIcon
                          className="mr-2 h-5 w-5 text-blue-300"
                          aria-hidden="true"
                        />
                      )}
                      Сотрудник
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  )
}
