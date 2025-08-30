import styled from "styled-components";
import ProductGridItem from "../ProductGridItem/productGridItem";
import ShowMore from "../../UI/ShowMore/showMore";
import { CARDITEM } from "../../mocks/mock";
import { useState, useEffect} from "react";

const StyledProductGrid = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    padding-left: 20px;
    padding-bottom: 130px;
`

function ProductGrid ({addToCart, cart}) {

    const ITEM_PER_LOAD = 6;
    const [visiblyItems, setVisiblyItems] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=> {
        // Первая загрузка
        const initialProducts = CARDITEM.slice(0, ITEM_PER_LOAD)
        setVisiblyItems(initialProducts)
        setCurrentIndex(ITEM_PER_LOAD)
    }, []) // Пустой массив зависимостей

    const loadMoreProducts = () => {
        const nextProduct = CARDITEM.slice(currentIndex, currentIndex + ITEM_PER_LOAD)
        setVisiblyItems(prev => [...prev, ...nextProduct])
        setCurrentIndex(prev => prev + ITEM_PER_LOAD)
    }

    const hasMoreProduct = currentIndex < CARDITEM.length

    return (
        <StyledProductGrid>
            {visiblyItems.map(item => (
                <ProductGridItem
                    key={item.id} 
                    item={item}
                    url={item.url} 
                    descr={item.descr} 
                    price={item.price}
                    onAddToCart={addToCart}
                    cart={cart}
                />
                
                    )
                )
            }
            { hasMoreProduct &&
            (<ShowMore onClick={loadMoreProducts}>
                Показать ещё
            </ShowMore>)}
        </StyledProductGrid>
    )
}

export default ProductGrid;