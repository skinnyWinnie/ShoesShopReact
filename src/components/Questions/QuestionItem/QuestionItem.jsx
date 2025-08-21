import styles from './style.module.css'
import plus from '../../../assets/icons/+.png'
import { useState } from 'react'

export default function QuestionItem () {
    const [isVisible, setVisible] = useState(false)
    const [rotation, setRotation] = useState(0)

    const toggleVisibility = () => {
        setVisible(!isVisible)
        setRotation(prev => prev + 90);
    }

    return (
            <div className={styles.questionsItem}>
                <div className={styles.questionsItemWrapper}>
                    <p className={styles.questionsNumber}>
                        Вопрос 1
                    </p>
                    <img 
                        src={plus} 
                        alt="" 
                        className={styles.questionsCloser} 
                        onClick={toggleVisibility} 
                        style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 0.55)',
                            }}
                    />
                </div>
                {isVisible && (
                    <p className={styles.questionsItemHidden}>
                    А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми
                </p>)}
            </div>
    )
}