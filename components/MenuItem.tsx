import React, { useEffect } from 'react';
import { useState } from 'react';

interface MenuItemProps {
    text: string;
}

export default function MenuItem({ text }: MenuItemProps) {
    const [isOver, setIsOver] = useState(false);
    const [isOut, setIsOut] = useState(false);
    const mouseOverHander = () => {
        setIsOver(true);
        setIsOut(false);
    }
    const mouseOutHandler = () => {
        setIsOut(true);
        setIsOver(false);
    }

    useEffect(() => {
        console.log('result is',isOver, isOut);
    }, [isOver, isOut])
    return (
        <>
            <div className='relative' onMouseOver={mouseOverHander} onMouseOut={mouseOutHandler}>
                {text}
                <a className={"block absolute cursor-pointer bg-white h-[1px] duration-[0.4s] pointer " + (isOver ? "animateover" : (isOut ? "animateout" : "left-0 w-0")) }></a>
            </div>
        </>
    )
}