import  {useEffect, useRef, useState, FC, PropsWithChildren} from "react";
import {motion, useAnimation, useMotionValue} from "framer-motion";

type CardIItemProps = {
    onVote: (result: boolean ) => void
    drag: boolean
} & PropsWithChildren


const enum Direction {
    RIGHT = 'right',
    LEFT = 'left',
}

export const CardContainerAnimation: FC<CardIItemProps> = ({children, onVote, ...props}) => {

    const cardElem = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const controls = useAnimation();

    const [constrained, setConstrained] = useState(true);

    const [direction, setDirection] = useState<Direction | undefined>(undefined);

    const [velocity, setVelocity] = useState(0);

    const getVote = (childNode: HTMLElement, parentNode: HTMLElement) => {
        const childRect = childNode.getBoundingClientRect();
        const parentRect = parentNode.getBoundingClientRect();
        if (parentRect.left >= childRect.right) {
            return false
        } else if (parentRect.right <= childRect.left) {
            return true
        } else {
            return undefined
        }
    };

    const getDirection = () => {
        return velocity >= 1 ? Direction.RIGHT : velocity <= -1 ? Direction.LEFT : undefined;
    };

    const getTrajectory = () => {
        setVelocity(x.getVelocity());
        setDirection(getDirection());
    };

    const flyAway = (min: number) => {
        const flyAwayDistance = (direction: string) => {
            if (cardElem.current) {
                const {parentNode = null} = cardElem.current;
                if (parentNode instanceof HTMLElement) {
                    const parentWidth = parentNode.getBoundingClientRect().width;
                    const childWidth = cardElem.current.getBoundingClientRect().width;
                    return direction === Direction.LEFT
                        ? -parentWidth / 2 - childWidth / 2
                        : parentWidth / 2 + childWidth / 2;
                }
            }
        };

        if (direction && Math.abs(velocity) > min) {
            setConstrained(false);
            controls.start({
                x: flyAwayDistance(direction)
            });
        }
    };

    useEffect(() => {
        const unsubscribeX = x.onChange(() => {
            if (cardElem.current) {
                const childNode = cardElem.current;
                const parentNode = cardElem.current.parentNode;
                if (parentNode instanceof HTMLElement) {
                    const result = getVote(childNode, parentNode);
                    result !== undefined && onVote(result);
                }
            }
        });

        return () => unsubscribeX();
    });

    return (
        <motion.div
            className="absolute"
            animate={controls}
            dragConstraints={constrained && {left: 0, right: 0, top: 0, bottom: 0}}
            dragElastic={1}
            ref={cardElem}
            style={{x}}
            onDrag={getTrajectory}
            onDragEnd={() => flyAway(300)}
            whileTap={{scale: 1.1}}
            {...props}
        >
            {children}
        </motion.div>
    );
};
