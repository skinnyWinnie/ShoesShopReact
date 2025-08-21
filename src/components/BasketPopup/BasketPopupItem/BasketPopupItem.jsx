import styles from './style.module.css'
import { useCart } from '../../CardContext';

export default function BasketPopupItem ({ item }) {

    

    const { removeFromCart } = useCart();

    const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Предотвращаем всплытие события
    removeFromCart(item.cartItemId); // Вызываем функцию удаления
  };
    
    return (
        <li className={styles.contentListItem} id={item.id}>
            <div className={styles.contentItemImage}>
                <img src={`${process.env.PUBLIC_URL}/shoes/${'midi-'}${item.url}`} alt={item.descr} />
            </div>
            <div className={styles.contentItemDescr}>
                <p>{item.descr}</p>
                <b className={styles.itemMainPrice}>{item.price}</b>
            </div>
            <div className={styles.contentItemDelete}>
                <button className={styles.itemBasketBtn} onClick={handleDelete}></button>
            </div>
        </li>
    )
}