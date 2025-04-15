import { FC } from "react";

import MessageProps from "../types/message.type";


const Message: FC<MessageProps> = ({ text, sender }) => {
    return (
        <div className={`chat ${sender === 'bot' ? 'chat-start' : 'chat-end'}`}>
            <div className={`chat-bubble ${sender === 'bot' ? 'chat-bubble-primary' : ''}`}>
                {text}
            </div>
        </div>
    )
}

export default Message;