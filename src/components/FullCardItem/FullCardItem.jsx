import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useCart } from '../CardContext';
import FullCardRating from './FullCardRating/FullCardRating'

export function FullCardItem({ item, onClose}) {
    

    const [userRating, setUserRating] = useState(0); // Рейтинг пользователя
    const [productRating] = useState(item.rating || 4.5); // Средний рейтинг товара

    const { addToCart } = useCart()

    useEffect(() => {
        // Сохраняем исходное состояние скролла
        const originalStyle = window.getComputedStyle(document.body).overflow;
        
        // Блокируем скролл
        document.body.style.overflow = 'hidden';
        
        // Восстанавливаем скролл при размонтировании
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    const handleRatingChange = (newRating) => {
        setUserRating(newRating);
        // Здесь можно отправить рейтинг на сервер
        console.log('User rated:', newRating, 'stars');
    };

    const handlePopupClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Закрытие по ESC
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!item) return null;

    return (
        <div className={styles.popup}  onClick={handlePopupClick}>
            <div className={styles.popupWrapper}>
                <div className={styles.popupContent}>
                    <div className={styles.popupGallery}>
                        <div className={styles.mainImage}>
                            <img src={`${process.env.PUBLIC_URL}/shoes/${item.url}`} alt="MainImage" id="current-main"/>
                        </div>
                        <div className={styles.thumbnails}>
                            <img src={`${process.env.PUBLIC_URL}/shoes/modal-mini-${item.url}`} alt="" className={styles.thumbnail}/>
                            <img src={`${process.env.PUBLIC_URL}/shoes/modal-mini-${item.url}`} alt="" className={styles.thumbnail}/>
                            <img src={`${process.env.PUBLIC_URL}/shoes/modal-mini-${item.url}`} alt="" className={styles.thumbnail}/>
                            <img src={`${process.env.PUBLIC_URL}/shoes/modal-mini-${item.url}`} alt="" className={styles.thumbnail}/>
                            <img src={`${process.env.PUBLIC_URL}/shoes/modal-mini-${item.url}`} alt="" className={styles.thumbnail}/>
                            <img src={`${process.env.PUBLIC_URL}/shoes/modal-mini-${item.url}`} alt="" className={styles.thumbnail}/>
                        </div>
                        <h3 className={styles.popupDescr}>Описание</h3>
                        <p className={styles.popupTxt}>{item.descr}</p>
                    </div>
                    <div className={styles.popupRight}>
                        <span className={styles.popupArticle}>Артикул: 879876</span>
                        <span className={styles.popupQuantity}>В наличии: 13 шт</span>
                        <h2 className={styles.productName}>{item.descr}</h2>
                        <div className={styles.userRatingSection}>
                            <FullCardRating
                                rating={userRating} 
                                onRatingChange={handleRatingChange}
                                editable={true}
                            />
                            {userRating > 0 && (
                                <span className={styles.ratingThanks}>
                                    Спасибо за вашу оценку!
                                </span>
                            )}
                            <span className={styles.ratingText}>
                                {productRating} из 5 ({item.reviewsCount || 24} отзывов)
                            </span>
                            
                        </div>

                          <span className={styles.chooseSize}>Выберите размер</span>
                          <div className={styles.sizeWrapper}>
                            <button className={styles.popupSize}>36</button>
                            <button className={styles.popupSize}>36</button>
                            <button className={styles.popupSize}>36</button>
                            <button className={styles.popupSize}>36</button>
                            <button className={styles.popupSize}>36</button>
                          </div>
                          <div className={styles.popupPrices}>
                            <p className={styles.newPrice}>{item.price}</p>
                            <p className={styles.oldPrice}>20 578</p>
                          </div>
                          <button className={styles.popupOrderBtn} onClick={() => addToCart(item)}>Заказать</button>
                          <ul className={styles.popupPluses}>
                            <li className={styles.plusesItem}>Бесплатная доставка до двери</li>
                            <li className={styles.plusesItem}>Оплата заказа при получении</li>
                            <li className={styles.plusesItem}>Обмен в течении двух недель</li>
                          </ul>
                          <h3 className={styles.popupSpecifications}>Характеристики</h3>
                          <ul className={styles.specificationsList}>
                            <li className={styles.specificationItem}>Пол: {item.male}</li>
                            <li className={styles.specificationItem}>Цвета: {item.colors}</li>
                            <li className={styles.specificationItem}>Состав: {item.compound}</li>
                            <li className={styles.specificationItem}>Страна: {item.country}</li>
                          </ul>
                    </div>
                </div> 
            </div>
        </div>
    )
}
