import QuestionsForm from "./QuestionsForm/QuestionsForm";
import styles from "./style.module.css" 
import img1 from '../../assets/Rectangle 37.jpg';
import img2 from '../../assets/Rectangle 38.jpg';
import img3 from '../../assets/Rectangle 39.jpg';
import img4 from '../../assets/Rectangle 40.jpg';
import img5 from '../../assets/Rectangle 41.jpg';
import Inst from '../../assets/1024px-Instagram_logo 1.png'

export default function QuestionsFromUs () {
    return (
        <section className={styles.questionsFromUs}>
            <QuestionsForm/>
            <div className={styles.instagrammContent}>
                <img src={Inst} alt="" className={styles.instagrammLogo}/>
                <div className={styles.instagrammGrid}>
                    <img src={img1} alt="" className={`${styles.instagrammGridImage} ${styles.instagrammGridImage1}`}/>
                    <img src={img2} alt="" className={`${styles.instagrammGridImage} ${styles.instagrammGridImage2} ${styles.instagrammGridBigImage}`}/>
                    <img src={img3} alt="" className={`${styles.instagrammGridImage} ${styles.instagrammGridImage3}`}/>
                    <img src={img4} alt="" className={`${styles.instagrammGridImage} ${styles.instagrammGridImage4}`}/>
                    <img src={img5} alt="" className={`${styles.instagrammGridImage} ${styles.instagrammGridImage5}`}/>
                </div>
            </div>
        </section>
    )
}