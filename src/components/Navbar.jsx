import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar">
        <Link to="/" className='logo'><h1>Tienda de los Bigotes</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/buzos">Buzoss</Link></li>
            <li><Link  className="menu-link" to="/productos/pantalones">Pantalones</Link></li>
            <li><Link  className="menu-link" to="/productos/remeras">Remeras</Link></li>

        </ul>
    </nav>
    )
}

export default Navbar