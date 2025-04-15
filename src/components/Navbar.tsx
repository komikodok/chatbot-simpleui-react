import { FC, useState } from "react";

import Sidebar from "./Sidebar";
import NewChat from "./NewChat";


const Navbar: FC = () => {
    const [uuid, setUuid] = useState<string[]>([]);

    const newSession = (data: string) => {
        setUuid(prev => [...prev, data])
    }
    
    return (
        <div className="navbar shadow-sm">
            <div className="navbar shadow-sm rounded-xl">

                <Sidebar uuids={uuid}/>

                <NewChat createSession={newSession}/>

                <div className="flex-1 text-center">
                    <a href="/" className="btn btn-ghost text-xl font-bold text-primary">Chatbot</a>
                </div>
                <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="/herodoc.png" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a className="text-red-500">Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;