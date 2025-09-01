import SelectionItem from "../../SelectionItem/SelectionItem"
import styles from './styles.module.css'

export function SelectionStep1({ onSubmit, currentStep}) {


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);


        if (data.shoeType) {
            onSubmit({ step1: data });
        } else {
            alert('Пожалуйста, выберите тип кроссовок');
        }
    };

   

    return (
            <>
                <h2 className={styles.selection__header}>
                        Мы подберем идеальную пару для вас
                </h2>
                <p className={styles.selection__txt}>
                        Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями 
                </p>
                <form action="" className={`${styles.selectionForm} ${styles.selectionForm1}`} onSubmit={handleSubmit}>
                    <h3 className={`${styles.selectionFormHeader} ${styles.selectionFormHeader1}`}>
                        Какой тип кроссовок рассматриваете?
                    </h3>
                    <div className={styles.formWrapper}>
                        <SelectionItem name="shoeType" value="sneakers" label="Кроссовки"/>
                        <SelectionItem name="shoeType" value="boots" label="Ботинки" />
                        <SelectionItem name="shoeType" value="sport" label="Спортивные"/>
                        <SelectionItem name="shoeType" value="casual" label="Повседневные"/>
                        <SelectionItem name="shoeType" value="running" label="Беговые"/>
                        <SelectionItem name="shoeType" value="basketball" label="Баскетбольные"/>
                    </div>
                    <button className={styles.selectionNext} type='submit'>Следующий шаг</button>
                </form>
                <div className={styles.selectionFooter}>
                    <div className={styles.selectionSteps}> {currentStep} из 3</div>
                    
                </div>
            </>
            
    )
}
