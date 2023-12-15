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
        color: isHovered ? "white":"inherent",
    }

    return{
        handleHover,handleHoverExit, textStyle
    }
}

export default useHover;

