import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useCart } from '../CardContext';
import FullCardRating from './FullCardRating/FullCardRating'

export function FullCardItem({ item, onClose}) {

    const [currentSize, setCurrentSize] = useState(0)
    const [orderData, setOrderData] = useState([])
    
    const [mainImage, setMainImage] = useState('/shoes/i.jpg')
    const [userRating, setUserRating] = useState(0); // Рейтинг пользователя
    const [productRating] = useState(item.rating || 4.5); // Средний рейтинг товара

    const { addToCart, cart } = useCart()

    useEffect(() => {
        console.log('Текущая корзина:', cart);
    }, [cart]);

    useEffect(() => {
        console.log('Заказы обновлены:', orderData);
    }, [orderData]);

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


    const handleOrderData = () => {
        const newOrder = {
            id: Date.now(),
            name: item.descr,
            price: item.price,
            size: currentSize,
            timestamp: new Date().toLocaleString()
        }
        setOrderData(prev => [...prev, newOrder])

        addToCart(item);
    }

    const handleSizeClick = (size) => {
        setCurrentSize(size);
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
                            <img src={mainImage} alt="MainImage" id="current-main"/>
                        </div>
                        <div className={styles.thumbnails}>
                            {
                                [   '/shoes/i.jpg',
                                    '/shoes/i(1).jpg',
                                    '/shoes/i(2).jpg',
                                    '/shoes/i(3).jpg',
                                    '/shoes/i(4).jpg',
                                    '/shoes/i(5).jpg',
                                ].map((thumb,index)=> (
                                    <img key={index} src={thumb} alt="" className={styles.thumbnail} onClick={() => setMainImage(thumb)} style={{ width: 70, height: 75, cursor: 'pointer' }}/>
                                ))
                            }
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
                            {[35,36,37,38,39].map((item)=> (
                                <button key={item} className={`${styles.popupSize} ${currentSize === item ? styles.active : ''}`} onClick={()=>handleSizeClick(item)}>{item}</button>
                            ))}
                          </div>
                          <div className={styles.popupPrices}>
                            <p className={styles.newPrice}>{item.price}</p>
                            <p className={styles.oldPrice}>20 578</p>
                          </div>
                          <button className={styles.popupOrderBtn} onClick={() => handleOrderData()}> Заказать </button>
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
