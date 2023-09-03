import { FC, PropsWithChildren } from "react"

import { Header } from "./Header/Header"

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="container dark:bg-gray-800">
      <Header />
      {children}
    </div>
  )
}
