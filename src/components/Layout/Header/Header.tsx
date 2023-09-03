import { FC, useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Switch } from '@headlessui/react'

import logo from "../../../assets/Logo.svg";

export const Header: FC = () => {

  const [enabled, setEnabled] = useState(localStorage.theme === 'dark')

  useEffect(() => {
    if (enabled || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [enabled])

  return (
    <header className="flex justify-between">
      <img src={logo} alt="logo" className="logo" />
      <div className="flex content-center gap-0.5">
        <SunIcon className="w-4 h-4 dark:text-blue-100"/>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-blue-100' : 'bg-black'}
            relative inline-flex h-5 w-11 shrink-0 cursor-pointer rounded-full p-0 border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-6 bg-white' : 'translate-x-0 bg-white'}
              pointer-events-none shrink-0 inline-block h-4 w-4 transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <MoonIcon className="w-4 h-4 dark:text-blue-100" />
      </div>
    </header>
  )
}
