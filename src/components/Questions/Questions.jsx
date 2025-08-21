import QuestionItem from "./QuestionItem/QuestionItem";
import styles from './style.module.css'

export default function Questions () {
    return (
        <section className={styles.questions}>
            <h2 className={styles.questionsHeader}>
                Часто задаваемые вопросы
            </h2>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        </section>
    )
}