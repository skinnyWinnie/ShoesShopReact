import styles from './styles.module.css'
import { useEffect, useRef } from 'react';
import { useCart } from '../CardContext';
import { FullBasketItem } from './FullBasketItem/FullBasketItem';
import { useBodyScrollLock } from '../useBodyScrollLock';



export function FullBasket({ isOpen, onClose }) {
    useBodyScrollLock(isOpen)
    


    const { cart } = useCart();

    const basketRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e) => {
      if (basketRef.current && !basketRef.current.contains(e.target)) {
        onClose();
      }
    };
    
        const handleEscapeKey = (e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        };
        // Добавляем обработчики
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
        // Убираем обработчики при размонтировании
        return () => {
        document.addEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
        };
      }, [isOpen, onClose]);
    
      // Если попап закрыт - не рендерим
      if (!isOpen) return null;

    return (
                    <div className={styles.orderPopup}>
                <div className={styles.orderPopupContent} ref={basketRef}>
                    <div className={styles.contentHeader}>
                        <p className={styles.headerTxt}>
                            Оформление заказа
                        </p>
                        <p className={styles.headerOrderNumber}>
                            Заказ 3456 67
                        </p>
                    </div>
                    <div className={styles.orderBasket}>
                        <div className={styles.basketContent}>
                            <p className={styles.contentQuantity}>
                                Товаров в заказе: <b className={styles.contentQuantityB}>{cart.length}</b>
                            </p>
                            <p className={styles.contentTotalSum}>
                                Общая сумма заказа: <b className={styles.content__totalSum_b}>{cart.reduce((acc, item)=> {
                                  return acc + item.price
                                }, 0)
                                }</b>
                            </p>
                            <p className={styles.orderCompound}>
                                Состав заказа <img alt='' src="/UpArrow.png" className={styles.UpArrow}/>
                            </p>
                            <ul className={styles.orderList}>
                                {cart.map((item, index) => (
                                    <FullBasketItem key={`${item.id}-${index}`} item={item} id={item.id} /> 
                                )
                                )}
                                   
                            </ul>
                        </div>

                        <div className={styles.buyerInfo}>
                            <form action="" className={styles.buyerForm}>
                                <input type="text" className={styles.buyerName} placeholder="Ваше имя"/>
                                <input type="tel" className={styles.buyerTel} placeholder="Номер телефона"/>
                                <input type="email" className={styles.buyerEmail} placeholder="E-mail"/>
                            </form>
                        </div>

                    </div>
                    <button className={styles.makeOrder}>
                        Оформить заказ
                    </button>
                </div>

            </div>
    )
}
