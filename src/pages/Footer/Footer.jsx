import styles from "./styles.module.css"
import logo from '../../assets/icons/logo.png'

export default function Footer () {
    return (
    <footer className={styles.footer}>
        <a href="12" className={styles.footerLogo}><img src={logo} alt="" className={styles.footerLogoImage}/></a>
        <ul className={styles.footerList}>
            <li className={`${styles.footerListLink} ${styles.footerListLink1}`}><a href="1">Каталог</a></li>
            <li className={`${styles.footerListLink} ${styles.footerListLink2}`}><a href="2">О нас</a></li>
            <li className={`${styles.footerListLink} ${styles.footerListLink3}`}><a href="3">Подбор товара</a></li>
            <li className={`${styles.footerListLink} ${styles.footerListLink4}`}><a href="4">Наша команда</a></li>
            <li className={`${styles.footerListLink} ${styles.footerListLink5}`}><a href="5">Доставка и оплата</a></li>
            <li className={`${styles.footerListLink} ${styles.footerListLink6}`}><a href="6">Контакты</a></li>
        </ul>
    </footer>
    )
}