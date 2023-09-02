import {FC, PropsWithChildren} from "react";

export const CardItem: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="bg-white w-60 h-2/3 flex items-center rounded-lg">
            {children}
        </div>
    )
}
