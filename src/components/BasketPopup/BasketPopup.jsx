// import BasketPopupItem from './BasketPopupItem/BasketPopupItem'
import styles from './style.module.css'
import { useEffect, useRef} from 'react';
import { useCart } from '../CardContext';
import BasketPopupItem from './BasketPopupItem/BasketPopupItem';
import { useBodyScrollLock } from '../useBodyScrollLock';




export default function BasketPopup ({ isOpen, onClose, onOpenFullBasket  }) {

    useBodyScrollLock(isOpen);

    const { cart, getTotalPrice } = useCart();



    const popupRef = useRef(null);


  // Обработка клика вне попапа и клавиши ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
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
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Если попап закрыт - не рендерим
  if (!isOpen) return null;

    return(
            <div className={styles.basketPopup} >
              <div className={styles.basketWrapper} ref={popupRef}>
                  <div className={styles.basketPopupContent}  >
                    {cart.length !==0 ? 
                    (cart.map((item, index)=> (
                      <BasketPopupItem key={`${item.id}-${index}`} item={item} id={item.id} />
                    ))) : 
                    (<p className={styles.emptyBasket}>Корзина пуста</p>)}
                  </div>
                  <div className={styles.basketPopupFooter}>
                        <div className={styles.popupFooterSum}>
                            <p className={styles.footerSumTxt}>
                                {/* Итого: {cart.reduce((acc, item)=> {
                                  return acc + item.price
                                }, 0)
                                } */}
                                {getTotalPrice().toFixed(2)} Руб
                            </p>
                        </div>
                        <button  className={styles.footerSumLink}  onClick={(e) => {e.preventDefault();
                                                                                      onClose(); 
                                                                                      onOpenFullBasket?.();}}>
                            Перейти в корзину
                        </button>
                                                    
                  </div>
                </div>
                
            </div>
    )
}
