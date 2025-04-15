import { TextareaHTMLAttributes } from "react";

interface TextareaAttributes extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name?: string,
    value?: string,
    error?: string,
    required?: boolean,
}

export default TextareaAttributes;