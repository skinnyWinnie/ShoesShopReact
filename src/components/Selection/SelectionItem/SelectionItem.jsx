import styles from './style.module.css' 
import item from '../../../assets/кроссовка.jpg'

export default function SelectionItem ({ 
    name = "shoeType", 
    value, 
    label,
    ...props 
}) {
    return (
         <div className={styles.formItem}>
                                
            <label className={styles.customCheckbox}>
                <img src={item} alt="" className={styles.formItemImg}/>
                <div className={styles.inputWrapper}>
                    <input type="radio" name={name} value={value}  id="item1" className={`${styles.selectionFormItem} ${styles.customCheckbox}`} {...props}/>
                    <span className={styles.checkmark}></span>
                    {label || `Вариант ${value}`}
                </div>
            </label>
        </div>
    )
}