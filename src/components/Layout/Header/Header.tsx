import { FC } from "react";

import logo from "../../../assets/Logo.svg";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export const Header: FC = () => {
  return (
    <header className="flex justify-between">
      <img src={logo} alt="logo" className="logo" />
      <div className="flex">
        <SunIcon className="w-4 h-4"/>

        <MoonIcon className="w-4 h-4" />
      </div>
    </header>
  )
}
