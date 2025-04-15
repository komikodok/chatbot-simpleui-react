import { FC } from "react";

import BodyAttributes from "../types/body.type";


const Body: FC<BodyAttributes> = ({children, className}) => {
    return (
        <div className="w-full h-3/4 px-4 md:px-24 my-2">
            <div className={`${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Body;