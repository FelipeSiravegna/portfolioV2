import styles from './SkillCard.module.css'

export default function SkillCard({ img, name }) {
    return (
        <div className={styles.container}>
            <img src={img} className={styles.skillImg} />
            <h4 className={styles.skillName}>{name}</h4>
        </div>
    )
}