import styles from './styles.module.css'

export function SelectionStep3({ onSubmit, currentStep }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        onSubmit({ step3: Object.fromEntries(formData) });
    };

    return (
        <>
            <h2 className={styles.selection__header}>
                Мы подберем идеальную пару для вас
            </h2>
            <p className={styles.selection__txt}>
                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями 
            </p>
            <form action="" className={`${styles.selectionForm}`} onSubmit={handleSubmit}>
                    <h3 className={`${styles.selectionFormHeader}`}>
                        Уточните какие-либо моменты
                    </h3>
                    <textarea name="placeHolder" id='placeHolder' className={styles.selection3Textarea} placeholder="Введите сообщение">
                        
                    </textarea>
                    <button className={styles.selectionNext}>Следующий шаг</button>
            </form> 
            <div className={styles.selectionFooter}>
                <div className={styles.selectionSteps}> {currentStep} из 3</div>
                
            </div>
        </>
    )
}
