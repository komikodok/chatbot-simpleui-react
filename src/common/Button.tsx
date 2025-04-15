import { FC } from "react";
import ButtonAttributes from "../types/button.type";


const Button: FC<ButtonAttributes> = ({label, className="btn-primary", ...props}) => {
    return (
        <button 
            className={`btn ${className}`}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button;