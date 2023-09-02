import { FC } from "react";

import logo from "../../../assets/Logo.svg";

export const Header: FC = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
    </header>
  )
}
