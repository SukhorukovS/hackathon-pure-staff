import React, {Children, PropsWithChildren, ReactNode, useState} from "react";
import {CardContainerAnimation} from "../CardContainerAnimation/CardContainerAnimation.tsx";

type WrapperProps = {
    onVote: (item: ReactNode, vote: boolean) => void
} & PropsWithChildren

export const Wrapper: React.FC<WrapperProps> = ({onVote, children, ...props}) => {
    const [stack, setStack] = useState<React.ReactNode[]>(Children.toArray(children))

    const pop = (array: unknown[]) => {
        return array.filter((_, index) => {
            return index < array.length - 1
        })
    }
    const handleVote = (item: React.ReactNode, vote: boolean) => {
        const newStack = pop(stack)
        setStack(newStack as React.ReactNode[])
        onVote(item, vote)
    }

    return (
        <div className="w-2/3 h-full flex justify-center relative overflow-hidden mr-auto ml-auto" {...props}>
            {stack.map((item, index) => {
                const isTop = index === stack.length - 1
                return (
                    <CardContainerAnimation
                        drag={isTop}
                        key={index}
                        onVote={(result) => handleVote(item, result)}
                    >
                        {item}
                    </CardContainerAnimation>
                )
            })}
        </div>
    )
}

