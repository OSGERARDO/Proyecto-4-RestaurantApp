import React from 'react';
import './Menu.css';

export const Menu = () => {
    return (
        <>
          <div className="menu-container">
  <h1>Menú Burger-Dev</h1>

  <img className="banner"
            src="img/banner.jpg" 
            alt="Dev Burgers - banner"
            
          />

  <div className="menu-section">
    <h2>Hamburguesas:</h2>
    <ul>
    <li className="menu-item">
  <strong>"HTML BURGER"</strong> - Una hamburguesa clásica con carne de código, lechuga fresca, queso en capas y un toque de salsa HTML especial. Servida en un pan suave de etiquetas. ¡Una deliciosa experiencia para tus sentidos! - <span className="price">$5,800</span>
</li>
<li className="menu-item">
  <strong>"CSS BURGER"</strong> - Nuestra hamburguesa más elegante, con capas de queso estilo CSS, cebolla con animaciones suaves, y una salsa de diseño que hará que tus papilas gustativas experimenten la armonía visual del sabor. - <span className="price">$6,000</span>
</li>
<li className="menu-item">
  <strong>"NODE BURGER"</strong> - ¡La hamburguesa con una pizca de magia en su carne! Carne de primera calidad, sazonada con habilidades Node.js, servida con cebolla en tiempo real, y una salsa que se ajusta a tus preferencias en tiempo de ejecución. ¡No te la puedes perder! - <span className="price">$7,500</span>
</li>
<li className="menu-item">
  <strong>"VS CODE BURGER"</strong> - Una hamburguesa que combina lo mejor de ambos mundos: sabor y eficiencia. Ingredientes cuidadosamente seleccionados, como la función "fold" de queso, una capa de "debugged" bacon y una salsa secreta que hace que cada mordisco sea como escribir código sin errores. - <span className="price">$8,800</span>
</li>
      <li className="menu-item">
        <strong>"JAVASCRIPT-BURGER"</strong> - Deliciosa hamburguesa con salsa BBQ de programación, lechuga, tomate y cebolla caramelizada. Acompañada de papas fritas. - <span className="price">$6,500</span>
      </li>
      <li className="menu-item">
        <strong>"PYTHON-STACK BURGER"</strong> - Hamburguesa especial con queso cheddar, bacon y nuestra increíble salsa Python. - <span className="price">$7,200</span>
      </li>
      <li className="menu-item">
        <strong>"C++ CHEESEBURGER"</strong> - Hamburguesa doble con queso suizo, champiñones salteados y mayonesa casera. - <span className="price">$8,000</span>
      </li>
      
    </ul>
  </div>

  <div className="menu-section">
    <h2>Papas:</h2>
    <ul>
      <li className="menu-item">
        <strong>Papas Clásicas</strong> - Crujientes papas fritas acompañadas de kétchup o mayonesa. - <span className="price">$2,500</span>
      </li>
      <li className="menu-item">
        <strong>Papas GEEK</strong> - Papas con queso derretido, bacon y cebolla verde. - <span className="price">$3,200</span>
      </li>
    </ul>
  </div>

  <div className="menu-section">
    <h2>Bebidas:</h2>
    <ul>
      <li className="menu-item">
        <strong>Refresco de Lenguaje</strong> - Bebida refrescante de tu elección (Coca-Cola, Sprite, Fanta). - <span className="price">$1,500</span>
      </li>
      <li className="menu-item">
        <strong>Smoothie de Bits</strong> - Delicioso smoothie de frutas frescas. - <span className="price">$2,000</span>
      </li>
    </ul>
  </div>

  <div className="menu-section">
    <h2>Postres:</h2>
    <ul>
      <li className="menu-item">
        <strong>"Cookie Code"</strong> - Galleta recién horneada con trozos de chocolate y nueces. - <span className="price">$1,800</span>
      </li>
      <li className="menu-item">
        <strong>"Java Lava Cake"</strong> - Pastel de chocolate caliente con un toque de café. - <span className="price">$2,500</span>
      </li>
    </ul>
  </div>



  <p>¡Esperamos que disfrutes de la experiencia Burger-Dev!</p>
</div>

        </>
    )
}
