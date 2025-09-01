import styles from './styles.module.css'
import img from '../../../../assets/selection-form1.png'
import { useState } from 'react'

export function SelectionStep2({onSubmit, currentStep}) {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (e) => {
        // Проверяем, есть ли хотя бы один выбранный чекбокс
        const checkboxes = document.querySelectorAll('input[name="size"]');
        const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        setIsChecked(isAnyChecked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isChecked) {
            alert('Пожалуйста, выберите хотя бы один размер');
            return;
        }
        const formData = new FormData(e.target);
        onSubmit({ step2: Object.fromEntries(formData) });
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
                    <h3 className={styles.selectionFormHeader}>
                        Какой размер вам подойдет?
                    </h3>
                    <div className={styles.selectionWrapper}>
                        <label className={styles.customCheckbox}>
                            <input type="checkbox" name="size" value='<36' id="item2" className={`${styles.selectionFormItem} ${styles.customCheckbox1}`} onChange={handleCheckboxChange}/>
                            <span className={styles.checkmark}></span>
                            менее 36
                        </label>
                        <label className={styles.customCheckbox}>
                            <input type="checkbox" name="size" value='36-38' id="item2" className={`${styles.selectionFormItem} ${styles.customCheckbox1}`} onChange={handleCheckboxChange}/>
                            <span className={styles.checkmark}></span>
                            36-38
                        </label>
                        <label className={styles.customCheckbox}>
                            <input type="checkbox" name="size" value='39-41' id="item2" className={`${styles.selectionFormItem} ${styles.customCheckbox1}`} onChange={handleCheckboxChange}/>
                            <span className={styles.checkmark}></span>
                            39-41
                        </label>
                        <label className={styles.customCheckbox}>
                            <input type="checkbox" name="size" value='42-44' id="item2" className={`${styles.selectionFormItem} ${styles.customCheckbox1}`} onChange={handleCheckboxChange}/>
                            <span className={styles.checkmark}></span>
                            42-44
                        </label>
                        <label className={styles.customCheckbox}>
                            <input type="checkbox" name="size" value='45>' id="item2" className={`${styles.selectionFormItem} ${styles.customCheckbox1}`} onChange={handleCheckboxChange}/>
                            <span className={styles.checkmark}></span>
                            45 и больше
                        </label>
                    </div>
                    <img src={img} alt="" className={styles.selectionFormImg}/>
                    <button className={styles.selectionNext}>Следующий шаг</button>
                </form>
                 <div className={styles.selectionFooter}>
                <div className={styles.selectionSteps}> {currentStep} из 3</div>
                
                </div>
            </>
    )
}
