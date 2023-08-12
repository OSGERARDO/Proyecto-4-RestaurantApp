import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Menu } from '../pages/menu'
import { Reservas } from '../pages/Reservas'


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
