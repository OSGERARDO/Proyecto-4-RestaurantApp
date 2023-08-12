import React from 'react';
import './Menu.css';

export const Menu = () => {
    return (
        <>
            <h1 className='menu-h1'>
                ¡Conoce nuestro asombroso menu!</h1>
            <h3 className='menu-h3'>Prueba nuestra nueva -Burger</h3>
            <img src="/img/burgerdos.jpg" className="d-block w-100" alt="burgerdos"/>
            <p className='p-menu'>"¡Saborea la perfección en cada mordisco con Burger - Dev! Nuestro compromiso es brindarte las hamburguesas más
                jugosas y deliciosas, creadas con pasión y servidas con una sonrisa</p>
        </>
    )
}
