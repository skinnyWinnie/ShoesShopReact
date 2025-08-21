import styles from './styles.module.css'
import { useCart } from '../../CardContext';

export function FullBasketItem({ item }) {

    const { removeFromCart } = useCart();

    const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Предотвращаем всплытие события
    removeFromCart(item.cartItemId); // Вызываем функцию удаления
  };

    return (
        <li className={styles.orderListItem}>  
            <div className={styles.liImage}>
                <img src={`${process.env.PUBLIC_URL}/shoes/${'mini-'}${item.url}`} alt={item.descr} className={styles.liImg}/>
            </div>
            <div className={styles.liDescr}>
                <p className={styles.liTxt}>{item.descr}</p>
                <b className={styles.liPrice}>{item.price}</b>
            </div>
            <div className={styles.liDelete}>
                <button className={styles.liBtn} onClick={handleDelete}>Удалить</button>
            </div>
        </li> 
    )
}
