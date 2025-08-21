import styles from './style.module.css' 
import item from '../../../assets/кроссовка.jpg'

export default function SelectionItem () {
    return (
         <div className={styles.form__item}>
                                <img src={item} alt="" className={styles.form__item_img}/>
                                <label className={styles.customCheckbox}>
                                    <input type="checkbox" name="item1" id="item1" className={`${styles.selection__form_item} ${styles.customCheckbox}`}/>
                                    <span className={styles.checkmark}></span>
                                    кеды
                                </label>
        </div>
    )
}