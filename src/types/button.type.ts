import { ButtonHTMLAttributes, ReactNode } from "react";


interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: ReactNode,
    className?: string
}

export default ButtonAttributes;