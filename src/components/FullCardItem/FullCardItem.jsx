import styles from './styles.module.css'

export function FullCardItem() {

    

    return (
        <div className={styles.popup}>
            <div className={styles.popupWrapper}>
                <div className={styles.popupContent}>
                    <div className={styles.popupGallery}>
                        <div className={styles.mainImage}>
                            {/* <img src={`${process.env.PUBLIC_URL}/shoes/${url}`} alt="MainImage" id="current-main"/> */}
                        </div>
                        <div className={styles.thumbnails}>
                            <img src="./img/867bca0039568c805d55cbfde9f23808 17.png" alt="" className={styles.thumbnail}/>
                            <img src="./img/31.jpg" alt="" className={styles.thumbnail}/>
                            <img src="./img/32.jpg" alt="" className={styles.thumbnail}/>
                            <img src="./img/34.jpg" alt="" className={styles.thumbnail}/>
                            <img src="./img/37.jpg" alt="" className={styles.thumbnail}/>
                            <img src="./img/40.jpg" alt="" className={styles.thumbnail}/>
                        </div>
                        <h3 className={styles.popupDescr}>Описание</h3>
                        <p className={styles.popupTxt}> </p>
                    </div>
                    <div className={styles.popupRight}>
                        <span className={styles.popupArticle}>Артикул: 879876</span>
                        <span className={styles.popupQuantity}>В наличии: 13 шт</span>
                        <h2 className={styles.productName}>Женские кроссовки Puma Force 1 Shadow</h2>
                        <div className={styles.rating}>
                            <i className={`${styles.fas} ${styles.faStar} ${styles.redStar}`}></i>
                            <i className={`${styles.fas} ${styles.faStar} ${styles.redStar}`}></i>
                            <i className={`${styles.fas} ${styles.faStar} ${styles.redStar}`}></i>
                            <i className={`${styles.fas} ${styles.faStar} ${styles.redStar}`}></i>
                            <i className={`${styles.fas} ${styles.faStar} ${styles.redStar}`}></i> 
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
                            <p className={styles.newPrice}>19 789</p>
                            <p className={styles.oldPrice}>20 578</p>
                          </div>
                          <button className={styles.popupOrderBtn}>Заказать</button>
                          <ul className={styles.popupPluses}>
                            <li className={styles.plusesItem}>Бесплатная доставка до двери</li>
                            <li className={styles.plusesItem}>Оплата заказа при получении</li>
                            <li className={styles.plusesItem}>Обмен в течении двух недель</li>
                          </ul>
                          <h3 className={styles.popupSpecifications}>Характеристики</h3>
                          <ul className={styles.specificationsList}>
                            <li className={styles.specificationItem}>Пол: Мужской</li>
                            <li className={styles.specificationItem}>Цвета: Разноцветный</li>
                            <li className={styles.specificationItem}>Состав: Кожа, текстиль, резина</li>
                            <li className={styles.specificationItem}>Страна: Вьетнам</li>
                          </ul>
                    </div>
                </div> 
            </div>
        </div>
    )
}
