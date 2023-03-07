import style from './Skills.module.css'
import SkillCard from '../SkillCard/SkillCard'
import HTML from '../../media/html-5-svgrepo-com.svg'
import CSS from '../../media/css-3-svgrepo-com.svg'
import JS from '../../media/javascript-svgrepo-com.svg'
import REACT from '../../media/react-svgrepo-com.svg'
import REDUX from '../../media/redux-svgrepo-com.svg'
import NODE from '../../media/node-js-svgrepo-com.svg'
import EXPRESS from '../../media/express-svgrepo-com.svg'
import POSTGRES from '../../media/postgresql-svgrepo-com.svg'
import SEQUELIZE from '../../media/sequelize-svgrepo-com.svg'
import POSTMAN from '../../media/postman-icon-svgrepo-com.svg'
import GIT from '../../media/git-svgrepo-com.svg'
import GITHUB from '../../media/github-svgrepo-com.svg'
import FIGMA from '../../media/figma-svgrepo-com.svg'
import SCRUM from '../../media/scrum.png'

export default function Skills() {
    return (
        <div className={style.container}>
            <div className={style.skills}>
                <SkillCard img={HTML} name="HTML5" />
                <SkillCard img={CSS} name="CSS3" />
                <SkillCard img={JS} name="JAVASCRIPT" />
                <SkillCard img={REACT} name="REACT" />
                <SkillCard img={REDUX} name="REDUX" />
                <SkillCard img={NODE} name="NODE" />
                <SkillCard img={EXPRESS} name="EXPRESS" />
                <SkillCard img={POSTGRES} name="POSTGRES" />
                <SkillCard img={SEQUELIZE} name="SEQUELIZE" />
                <SkillCard img={POSTMAN} name="POSTMAN" />
                <SkillCard img={GIT} name="GIT" />
                <SkillCard img={GITHUB} name="GITHUB" />
                <SkillCard img={FIGMA} name="FIGMA" />
                <SkillCard img={SCRUM} name="SCRUM" />
            </div>
        </div>
    )
}