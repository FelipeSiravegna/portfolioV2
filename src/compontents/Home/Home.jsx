import style from './Home.module.css'

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <h3 className={style.saludo}>¡Hola!</h3>
                <h3 className={style.presentacion}>Soy Felipe Siravegna, full stack developer graduado del bootcamp de SoyHenry 🚀</h3>
            </div>
        </div>
    )
}