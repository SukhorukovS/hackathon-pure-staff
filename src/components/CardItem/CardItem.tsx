import {FC, PropsWithChildren} from "react";

export const CardItem: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="bg-white w-1/2 h-full flex justify-center items-center rounded-lg mr-auto ml-auto">
            {children}

        </div>
    )
}
