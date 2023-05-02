import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    const imgLogo = 'https://svgsilh.com/svg/1970468.svg'

    return (
        <header>
            <img className="img-logo" src={imgLogo} alt="" />
            <h1>Viggo Tech Informatica</h1>
            <nav>
                <ul>
                    <li>Productos</li>
                    <li>Servicios</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar
