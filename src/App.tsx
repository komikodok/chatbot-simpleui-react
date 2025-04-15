import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "../routes/Router";


const App: FC = () => {
    return (
        <div className="w-screen h-screen">
            <BrowserRouter>
                <Router></Router>
            </BrowserRouter>
        </ div>
    )
}

export default App;