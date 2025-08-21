import VK from '../../assets/icons/VK.svg'
import INS from '../../assets/icons/Instagram.svg'
import map from '../../assets/map.png'
import styles from './style.module.css'

export default function Contacts () {
    return (
        <section className={styles.contacts}>
            <div className={styles.contactsInfo}>
                <h2 className={styles.contactsInfoHeader}>
                    Контакты
                </h2>
                <div className={styles.contactsInfoMainOffice}>
                    <p className={styles.mainOfficeTxt}>главный офис</p>
                    <p className={styles.mainOfficeTel}>+7 800 789 89 89</p>
                    <p className={styles.mainOfficeAddress}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
                </div>
                <div className={styles.contactsInfoSales}>
                    <p className={styles.salesTxt}>отдел продаж</p>
                    <p className={styles.salesTel}>+7 800 789 89 89</p>
                    <p className={styles.salesAddress}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
                </div>
                <div className={styles.socialWrapper}>
                    <img src={VK} alt="" className={styles.vk}/>
                    <img src={INS} alt="" className={styles.instagramm}/>
                </div>
            </div>
            <div className={styles.contactsMap}>
                <img src={map} alt="" className={styles.contactsMapImg}/>
            </div>
        </section>
    )
}