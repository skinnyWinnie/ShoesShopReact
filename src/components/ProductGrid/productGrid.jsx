import styled from "styled-components";
import ProductGridItem from "../ProductGridItem/productGridItem";
import ShowMore from "../../UI/ShowMore/showMore";
import { CARDITEM } from "../../mocks/mock";


const StyledProductGrid = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    padding-left: 20px;
    padding-bottom: 130px;
`

function ProductGrid ({addToCart, cart}) {

    

    return (
        <StyledProductGrid>
            {CARDITEM.map(item => (
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
            <ShowMore>
                Показать ещё
            </ShowMore>
        </StyledProductGrid>
    )
}

export default ProductGrid;