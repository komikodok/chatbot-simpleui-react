import { FC, useEffect, useRef } from "react";
import TextareaAttributes from "../types/textarea.type";

const Textarea: FC<TextareaAttributes> = ({
  name,
  value = "",
  required = true,
  error,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  
      textareaRef.current.style.maxHeight = "100px";
      textareaRef.current.style.overflowY = "auto";
    }
  };

  useEffect(() => {
    autoResize();
  }, [value]);

  return (
    <textarea
      name={name}
      value={value}
      ref={textareaRef}
      className={`textarea w-full h-auto resize-none font-semibold lg:text-lg text-md focus:outline-none ${
        value?.length > 0 ? "textarea-primary" : "focus:border-1 focus:border-gray-300"
      } ${error && "textarea-error"}`}
      required={required}
      onInput={autoResize}
      {...props}
    />
  );
};

export default Textarea;
