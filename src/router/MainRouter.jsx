import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { About } from '../pages/About.jsx'
import { Menu } from '../pages/Menu.jsx'
import { Reservas } from '../pages/Reservas.jsx'


export const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path="/reservas" element={<Reservas />} />

            <Route path='*' element={<Navigate to="/"/>}/>

        </Routes >



    )
}
