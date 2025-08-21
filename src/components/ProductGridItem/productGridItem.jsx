import styled from "styled-components";
import { useCart } from "../CardContext";
import eye from '../../assets/icons/Смотреть товар.png'
import basket from '../../assets/icons/Добавить в корзину.png'
import styles from './style.module.css'
// import { CARDITEM } from "../../mocks/mock";
const StyledProductGridItem = styled.div`
    position: relative;
    
`

function ProductGridItem ({id, url, descr, price, item}) {

    const { addToCart } = useCart();

    return(
        <StyledProductGridItem className={styles.productGridItem}>
            <img src={`${process.env.PUBLIC_URL}/shoes/${url}`} alt="" className={styles.cardImage}/>
                    <div className={styles.imgWrapper}>
                        <img src={eye} alt="" className={`${styles.cardIcon} ${styles.iconEye}`}/>
                        <img src={basket} alt="" className={`${styles.cardIcon} ${styles.iconBasket}`} onClick={() => addToCart(item)}/>
                    </div>
                    <p className={styles.cardDescr}>{descr}</p>
                    <p className={styles.cardPrice}>{price}</p>
        </StyledProductGridItem>
    )
}
export default ProductGridItem