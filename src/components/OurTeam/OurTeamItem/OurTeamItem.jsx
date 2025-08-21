
import styles from '../OurTeamItem/style.module.css'


export default function OurTeamItem ({id, url, name, surname}) {
    return (
        <div className={styles.ourTeamCard}>
            <img key={id} src={`${process.env.PUBLIC_URL}/img/${url}`} alt={`${name} ${surname}`} className={styles.ourTeamCardImg}/>
            <p className={styles.ourTeamCardNname}>{name}</p>
            <p className={styles.ourTeamCardRole}>{surname}</p>
        </div>
    )
}

