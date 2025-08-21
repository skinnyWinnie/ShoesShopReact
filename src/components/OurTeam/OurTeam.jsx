import OurTeamItem from './OurTeamItem/OurTeamItem'
import styles from './style.module.css'
import {img }from '../../mocks/mock.js'


export default function OurTeam () {
    return (
        <section className={styles.ourTeam}>
            <h2 className={styles.ourTeamHeader}>
                Наша команда
            </h2>
            <div className={styles.ourTeamWrapper}>
                {img.map(member => (
                    <OurTeamItem 
                        key={member.id} 
                        id={member.id}
                        url={member.url} 
                        name={member.name} 
                        surname={member.surname}
                    />
                ))}
                
                
            </div>
        </section>
    )
}