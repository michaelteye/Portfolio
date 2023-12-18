"use client"
import { useState } from "react";

const useHover = ()=>{
    const [isHovered, setIsHovered ] = useState(false)

    const handleHover = ()=>{
        setIsHovered(true);
    }
    
    const handleHoverExit = ()=>{
        setIsHovered(false);
    }
    
    const textStyle = {
        color: isHovered ? "white":"#5d5c5c",
    }

    return{
        handleHover,handleHoverExit, textStyle
    }
}

export default useHover;

