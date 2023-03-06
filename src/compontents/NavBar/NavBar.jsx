import style from './NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className={style.container}>
            <Link to="/" className={style.navBarItem}><h3>Inicio</h3></Link>
            <Link to="/sobreMi" className={style.navBarItem}><h3>Sobre mí</h3></Link>
            <Link to="/conocimientos" className={style.navBarItem}><h3>Conocimientos</h3></Link>
            <Link to="/proyectos" className={style.navBarItem}><h3>Proyectos</h3></Link>
            <Link to="/contactame" className={style.navBarItem}><h3>Contactame</h3></Link>
        </div>
    )
}