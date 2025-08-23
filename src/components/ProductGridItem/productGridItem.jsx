import styled from "styled-components";
import { useCart } from "../CardContext";
import eye from '../../assets/icons/Смотреть товар.png'
import basket from '../../assets/icons/Добавить в корзину.png'
import styles from './style.module.css'
import { useState } from "react";
import { FullCardItem } from "../FullCardItem/FullCardItem";
const StyledProductGridItem = styled.div`
    position: relative;
    
`

function ProductGridItem ({id, url, descr, price, item}) {

    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }


    return(
        <>
        <StyledProductGridItem className={styles.productGridItem}>
            <img src={`${process.env.PUBLIC_URL}/shoes/${url}`} alt="" className={styles.cardImage}/>
                    <div className={styles.imgWrapper}>
                        <img src={eye} alt="" className={`${styles.cardIcon} ${styles.iconEye}`} onClick={handleOpenModal}/>
                        <img src={basket} alt="" className={`${styles.cardIcon} ${styles.iconBasket}`} onClick={() => addToCart(item)}/>
                    </div>
                    <p className={styles.cardDescr}>{descr}</p>
                    <p className={styles.cardPrice}>{price}</p>
        </StyledProductGridItem>

        {isModalOpen && (
            <FullCardItem item={item} onClose={handleCloseModal}/>
        )}
    </>
    )
}
export default ProductGridItem