import style from './About.module.css'
import LINKEDIN from '../../media/linkedin.svg'
import GITHUB from '../../media/github.svg'
import MAIL from '../../media/mail-svgrepo-com.svg'
import CURRICULUM from '../../media/curriculum.svg'
import RESUME from '../../files/Resume.pdf'

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.infoSobreMi}>
                <div className={style.textoPresentacion}>
                    <h3 className={style.titulo}>Felipe Siravegna-<b className={style.yellow}>Full Stack Web Developer</b></h3>
                    <p className={style.texto}>
                        Mi nombre es Felipe Siravegna, Full Stack Web Developer graduado del bootcamp de soyHenry. Tengo experiencia
                        trabajando con HTML, CSS, JavaScript, React, Redux, NodeJS, Express, Sequelize, SQL, entre otras cosas. 
                        <br/>
                        Me consideron una persona muy responsable que tiene una gran capacidad para resolver problemas, trabajar en equipo, 
                        cuento con una gran capacidad de aprendizaje y con un buen nivel de inglés.
                    </p>
                </div>
                <div className={style.contacto}>
                    <div className={style.primerColumna}>
                        <div className={style.item}>
                            <img src={MAIL} alt="MAIL" className={style.infoImages} />
                            <h4 className={style.contactoItem}>Mail: <b className={style.yellow}>felipesiravegna1@gmail.com</b></h4>
                        </div>
                        <div className={style.item}>
                            <img src={CURRICULUM} alt="CURRICULUM" className={style.infoImages} />
                            <a href={RESUME} download="Felipe Siravegna CV">
                                <h4 className={style.contactoItem}><b className={style.yellow}>Curriculum</b></h4>
                            </a>
                        </div>
                    </div>
                    <div className={style.segundaColumna}>
                        <diV className={style.item}>
                            <img src={GITHUB} alt="GITHUB" className={style.infoImages} />
                            <h4 className={style.contactoItem}>GitHub: <a href='https://github.com/FelipeSiravegna' target='_blank'><b className={style.yellow}>Felipe Siravegna</b></a></h4>
                        </diV>
                        <div className={style.item}>
                            <img src={LINKEDIN} alt="LINKEDIN" className={style.infoImages} />
                            <h4 className={style.contactoItem}>LinkedIn: <a href='https://www.linkedin.com/in/felipe-siravegna/' target='_blank'><b className={style.yellow}>Felipe Siravegna</b></a></h4>
                        </div>
                    </div>                        
                </div>
                <div className={style.experiencia}>
                    <h3>Experiencia</h3>
                </div>
                <div className={style.educacion}>
                    <h3>Educacion</h3>
                </div>
                <div className={style.idiomas}>
                    <h3>Idiomas</h3>
                </div>
            </div>
            
        </div>
    )
}