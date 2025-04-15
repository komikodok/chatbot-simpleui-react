import { FC } from "react";
import Button from "../common/Button";
import SidebarAttributes from "../types/sidebar.type";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar: FC<SidebarAttributes> = ({uuids}) => {
    const navigate = useNavigate();

    const { idParam } = useParams();
    return (
        <div className="tooltip tooltip-bottom" data-tip="Sidebar">
            <Button 
                className="btn-square btn-ghost" 
                popoverTarget="popover-1"
                label={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>}
            >
            </Button>

            <ul 
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" 
                id="popover-1" 
            >
                {uuids.map((uuid, index) => (
                    <li key={index} onClick={() => {
                        idParam ? navigate(`/chat/${idParam}`) : navigate(`/chat/${uuid}`)
                    }}><a>{uuid}</a></li>
                ))}
            </ul>
        </ div>
    )
}

export default Sidebar;