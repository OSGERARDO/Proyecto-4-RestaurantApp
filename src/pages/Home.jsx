import { Carrusel } from "../components/Carrusel"
import "./Home.css"


export const Home = () => {
    return (
        <>
          <h1 className="burgertext">Hamburguesas para desarrolladores</h1>
            <Carrusel/>
            <div className="text">
        <h2>En Burger Dev, nos preocupamos por los detalles.</h2>
        <p>Tenemos la mejor mezcla de código y hamburguesas.</p>
      </div>

        </>
    )
}
