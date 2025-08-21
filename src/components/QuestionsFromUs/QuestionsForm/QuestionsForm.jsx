import styles from './style.module.css'

export default function QuestionsForm () {
    return (
            <form action="" className={styles.questionForm}>
                <h2 className={styles.questionFormHeader}>
                    Есть вопросы?
                </h2>
                <p className={styles.questionFormTxt}>Заполните форму и наш<br/> менеджер свяжется с вами</p>
                <input type="text" name="name" id="" placeholder="Ваше имя"/>
                <input type="tel" name="tel" id="" placeholder="Номер телефона"/>
                <button className={styles.questionFormBtn}>Отправить</button>
            </form>
    )
}