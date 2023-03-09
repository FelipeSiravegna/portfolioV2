import style from './Home.module.css'
import PROFILE from '../../media/profile.jpg'
import CV from '../../media/curriculum.svg'
import GITHUB from '../../media/github.svg'
import LINKEDIN from '../../media/linkedin.svg'
import RESUME from '../../files/Resume.pdf'

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <img src={PROFILE} alt="PROFILE" className={style.profile} />
                <div className={style.texto}>
                    <h3 className={style.saludo}>¡Hola!</h3>
                    <h3 className={style.presentacion}>Mi nombre es <b className={style.yellow}>Felipe Siravegna</b> y soy <b className={style.yellow}>Desarrollador Web Full Stack</b></h3>
                    <div className={style.clickableImages}>
                        <a href={RESUME} download="Felipe Siravegna CV">
                            <img src={CV} alt="CV" className={style.infoImages} />
                        </a>
                        <a href='https://github.com/FelipeSiravegna' target='_blank'>
                            <img src={GITHUB} alt="GITHUB" className={style.infoImages} />
                        </a>
                        <a href='https://www.linkedin.com/in/felipe-siravegna/' target='_blank'>
                            <img src={LINKEDIN} alt="LINKEDIN" className={style.infoImages} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}