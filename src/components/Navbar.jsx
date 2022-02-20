import { useState } from "react"
import { Link } from 'react-scroll'
import logo from '../images/logo.png'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)

    const fixNavbar = () => {
        if(window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', fixNavbar)
    
    return (
        <section className={navbar ? "navbar-container active" : "navbar-container"}>
            <div className="logo-container">
                <img className="navbar__logo" src={logo} alt="logo" />
            </div>
            <nav className="navbar">
                <ul className="list">
                    <li className="list__item">
                        <Link activeClass="active" className="list__link" to="home" spy={true} smooth={true} duration={500}>Inicio</Link>
                    </li>
                    <li className="list__item">
                        <Link activeClass="active" className="list__link" to="gallery" spy={true} smooth={true} duration={500}>Galería</Link>
                    </li>
                    <li className="list__item">
                        <Link activeClass="active" className="list__link" to="aboutUs" spy={true} smooth={true} duration={500}>Quienes somos</Link>
                    </li>
                    <li className="list__item">
                        <Link activeClass="active" className="list__link" to="contact" spy={true} smooth={true} duration={500}>Contacto</Link>
                    </li>
                    <li className="list__item">
                        <Link activeClass="active" className="list__link" to="plans" spy={true} smooth={true} duration={500}>Planes</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
