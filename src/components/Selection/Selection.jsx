import SelectionItem from './SelectionItem/SelectionItem'
import styles from './style.module.css'

export default function Selection () {
    return (
        <section className={styles.selection}>
            <h2 className={styles.selection__header}>
                Мы подберем идеальную пару для вас
            </h2>
            <p className={styles.selection__txt}>
                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями 
            </p>
            <form action="" className={`${styles.selection__form} ${styles.selection__form1}`}>
                <h3 className={`${styles.selection__form_header} ${styles.selection__form_header1}`}>
                    Какой тип кроссовок рассматриваете?
                </h3>
                <div className={styles.form__wrapper}>
                    <SelectionItem/>
                    <SelectionItem/>
                    <SelectionItem/>
                    <SelectionItem/>
                    <SelectionItem/>
                    <SelectionItem/>
                </div>
            </form>

            </section>
    )
}