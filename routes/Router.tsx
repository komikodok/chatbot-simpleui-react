import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import LandingPage from '../src/components/LandingPage'
import Chatbot from '../src/components/Chatbot';


const Router: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/chat/' element={<Chatbot />}/>
            <Route path='/chat/:id' element={<Chatbot />}/>
        </Routes>
    )
}

export default Router;