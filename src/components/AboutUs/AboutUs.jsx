import styles from './style.module.css';
import left from "../../assets/icons/cite.png"
import right from "../../assets/Mask Group.png"

export default function AboutUs () {

    return (
        <section className={styles.aboutUs}>
            <div className={styles.aboutUs__left}>
                <h2 className={styles.aboutUs__left_header}>Пара слов о нас</h2>
                <p className={styles.aboutUs__lefttxt}>
                    Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. 
                </p>
                <img src={left} alt="" className={styles.aboutUs__left_logo}/>
            </div>
            <div className={styles.aboutUs__right}>
                <img src={right} alt="" className={styles.aboutUs__right_img}/>
            </div>
        </section>
    )
}