import React from 'react';
import './Menu.css';

export const Menu = () => {
    return (
        <>
          <div className="menu-container">
  <h1 >Menú Burger-Dev</h1>

  <img className="banner"
            src="img/banner.jpg" 
            alt="Dev Burgers - banner"
            
          />

  <div className="menu-section">
    <h2>Hamburguesas:</h2>
    <ul>
    <li className="menu-item">
    <img src="img/menu1.jpg" alt=" Burger-Dev!" className="menu-image" />
  <strong>" BURGER-Dev!"</strong>  Una hamburguesa clásica con carne de código, lechuga fresca, queso en capas y un toque de salsa  especi-Dev!al. Servida en un pan suave de etiquetas. ¡Una deliciosa experiencia para tus sentidos! - <span className="price">$5,800</span>
</li>
<li className="menu-item">
<img src="img/menu2.jpg" alt=" Burger-Dev!" className="menu-image" />
  <strong>"CSS BURGER"</strong>  Nuestra hamburguesa más elegante, con capas de queso estilo CSS, cebolla con animaciones suaves, y una salsa de diseño que hará que tus papilas gustativas experimenten la armonía visual del sabor. - <span className="price">$6,000</span>
</li>
<li className="menu-item">
<img src="img/menu3.jpg" alt=" Burger-Dev!" className="menu-image" />
  <strong>"NODE BURGER"</strong>  ¡La hamburguesa con una pizca de magia en su carne! Carne de primera calidad, sazonada con habilidades Node.js, servida con cebolla en tiempo real, y una salsa que se ajusta a tus preferencias en tiempo de ejecución. ¡No te la puedes perder! - <span className="price">$7,500</span>
</li>

      <li className="menu-item">
      <img src="img/menu4.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>"JAVASCRIPT-BURGER"</strong>  Deliciosa hamburguesa con salsa BBQ de programación, lechuga, tomate y cebolla caramelizada. Acompañada de papas fritas. - <span className="price">$6,500</span>
      </li>
      <li className="menu-item">
      <img src="img/menu5.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>"PYTHON-STACK BURGER"</strong>  Hamburguesa especial con queso cheddar, bacon y nuestra increíble salsa Python. - <span className="price">$7,200</span>
      </li>
      <li className="menu-item">
      <img src="img/menu6.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>"C++ CHEESEBURGER"</strong>  Hamburguesa doble con queso suizo, champiñones salteados y mayonesa casera. - <span className="price">$8,000</span>
      </li>
      <li className="menu-item">
      <img src="img/menu7.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>"T3 stack"</strong> 
        "Doble hamburguesa" (Doble TypeScript en el frontend y en el backend), "pepinillos" (React con Next en el frontend), queso cheddar fundido con Tailwind, lechuga (Prisma) y todo unido con finas capas de tomate (TRPC).- <span className="price">$14,990</span>
      </li>
      <li className="menu-item">
      <img src="img/menu8.jpg" alt=" Burger-Dev!" className="menu-image" />
  <strong>"SERVER-BURGER"</strong> "Hamburguesa de 8 carnes, un verdadero desafío, con queso derretido y salsa , tomat-Dev!e fresco, lechuga, tocino, pepinillos, cebolla, porotos verdes, ají verde, palta y papas fritas. ¡Ocho pisos de puro sabor!" <span className="price">$21.990</span>
</li>
      
    </ul>
  </div>

  <div className="menu-section">
    <h2>Papas:</h2>
    <ul>
      <li className="menu-item">
      <img src="img/menu9.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>Papas Clásicas</strong>  Crujientes papas fritas acompañadas de kétchup o mayonesa. - <span className="price">$2,500</span>
      </li>
      <li className="menu-item">
      <img src="img/menu10.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>Papas GEEK</strong>  Papas con queso derretido, bacon y cebolla verde. - <span className="price">$3,200</span>
      </li>
    </ul>
  </div>

  <div className="menu-section">
    <h2>Bebidas:</h2>
    <ul>
      <li className="menu-item">
      <img src="img/menu11.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>Refresco de Lenguaje</strong>  Bebida refrescante de tu elección (Coca-Cola, Sprite, Fanta). - <span className="price">$1,500</span>
      </li>
      <li className="menu-item">
      <img src="img/menu12.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>Smoothie de Bits</strong>  Delicioso smoothie de frutas frescas. - <span className="price">$2,000</span>
      </li>
    </ul>
  </div>

  <div className="menu-section">
    <h2>Postres:</h2>
    <ul>
      <li className="menu-item">
      <img src="img/menu13.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>"Cookie Code"</strong>  Galleta recién horneada con trozos de chocolate y nueces. - <span className="price">$1,800</span>
      </li>
      <li className="menu-item">
      <img src="img/menu14.jpg" alt=" Burger-Dev!" className="menu-image" />
        <strong>"Java Lava Cake"</strong>  Pastel de chocolate caliente con un toque de café. - <span className="price">$2,500</span>
      </li>
    </ul>
  </div>


<p>"Amplia variedad de opciones de pago disponibles: efectivo, Redcompra, Bitcoin y más. Tu comodidad es nuestra prioridad."</p>
  <p>¡Disfruta Burger-Dev!</p>
</div>

        </>
    )
}
