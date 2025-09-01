import styles from './styles.module.css'
import { useState } from 'react'
import img from '../../../../assets/selection-final-phone/iPhone 11 Pro.png'
import success from '../../../../assets/selection-final-phone/отпр.svg'


export function SelectionStep4({ onSubmit, formData }) {

    const [currentImg, setCurrentImg] = useState(img)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [contactData, setContactData] = useState({
            phone: '',
            email: ''
        })
    
        const handleInputChange = (e) => {
            const {name, value} = e.target
            setContactData(prev => ({...prev, [name]: value}))
        }
    
    
    
        const handleSubmit = (e) => {
            e.preventDefault();
    
            if(!contactData.phone || !contactData.email) {
                alert('Пожалуйста, заполните все поля');
                return;
            }

            setIsSubmitted(true)
            setCurrentImg(success)
    
            onSubmit({ 
                step4: contactData,
                ...formData // все данные из предыдущих шагов
            });
    };

    return (
        <div>
            <h2 className={styles.selectionHeader}>
                Ваша подборка готова!
            </h2>
            <p className={styles.selectionTxt}>
                Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог
            </p>
            <div className={styles.selectionFinalWrapper}>
                <div className={styles.selectionFinalForm}>
                    <h4 className={styles.finalFormHeader}>
                        Получить предложение
                    </h4>
                    <p className={styles.finalFormTxt}>
                        Получите подборку подходящих для вас моделей на почту
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='phone' value={contactData.phone} placeholder="Ваше Имя" onChange={handleInputChange} onSubmitted={isSubmitted}/>
                        <input type="E-mail" name='email' value={contactData.email} placeholder="E-mail" onChange={handleInputChange}/>
                        <button className={styles.finalFormBtn}>
                            Получить
                        </button>
                        
                    </form>
                    <img src={currentImg} alt="" className={styles.finalFormImg}/>
                </div>   
            </div>
        </div>
    )
}
