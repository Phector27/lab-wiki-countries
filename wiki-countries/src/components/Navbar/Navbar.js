import './Navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className="navbar navbar-light bg-primary">
            <NavLink className="navbar-brand text" to="/">Wiki-Countries</NavLink>
        </nav>
    )
}

export default Navbar