import { FC, useState, useRef, useEffect } from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import Message from "./Message";

type MessageType = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

const Chatbot: FC = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [messages, setMessages] = useState<MessageType[]>([
        { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setPrompt(e.target.value);
    }

    const handleSendMessage = () => {
        if (prompt.trim() === '') return;

        const newUserMessage: MessageType = {
            id: messages.length + 1,
            text: prompt,
            sender: 'user'
        };
        setMessages(prev => [...prev, newUserMessage]);
        setPrompt("");

        setTimeout(() => {
            const botResponses = [
                'I understand your question.',
                'Could you explain more details?',
                'Sorry, I didn\'t get that. Could you repeat?',
                'Thanks for your question!',
                'I\'ll look up information about that.'
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            
            const newBotMessage: MessageType = {
                id: messages.length + 2,
                text: randomResponse,
                sender: 'bot'
            };
            setMessages(prev => [...prev, newBotMessage]);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            <Navbar />

            <Body className="bg-base-100 rounded-md shadow-md mx-auto p-4 lg:p-6 max-w-7xl h-full overflow-y-scroll">
                {messages.map((message, index) => (
                    <Message 
                        key={index}
                        text={message.text}
                        sender={message.sender}
                    />
                ))}
                <div ref={messagesEndRef} />
            </Body>
            
            <div className="w-full fixed bottom-0 right-1/2 translate-x-1/2 px-4 md:px-24 bg-base-100 py-4">
                <div className="flex gap-2 max-w-7xl justify-center items-center mx-auto">
                    <Textarea 
                        name="prompt" 
                        value={prompt} 
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask me anything"
                    />
                    <div className="tooltip" data-tip="Send">
                        <Button 
                            label={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            }
                            className={`btn-primary transition-all duration-400 ${!prompt && 'opacity-50'}`}
                            onClick={handleSendMessage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatbot;