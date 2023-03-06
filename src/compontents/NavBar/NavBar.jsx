import style from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={style.container}>
            <a href="/inicio" className={style.navBarItem}><h3>Inicio</h3></a>
            <a href="/sobreMi" className={style.navBarItem}><h3>Sobre mí</h3></a>
            <a href="/conocimientos" className={style.navBarItem}><h3>Conocimientos</h3></a>
            <a href="/proyectos" className={style.navBarItem}><h3>Proyectos</h3></a>
            <a href="/contactame" className={style.navBarItem}><h3>Contactame</h3></a>
        </div>
    )
}