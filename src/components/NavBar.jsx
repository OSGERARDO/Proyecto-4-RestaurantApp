import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark  bg-black navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand"  style={{color: "#02fd24"}} to="/">¡ Burger-Dev !</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link"  style={{color: "#02fd24"}} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  style={{color: "#02fd24"}} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  style={{color: "#02fd24"}} to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"   style={{color: "#02fd24"}}to="/reservas">Reservas</NavLink>
                            </li>

                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}
