import styled from "styled-components";
import NavListItem from '../NavListItem/NavListItem';
import NavBasket from "../NavBasket/NavBasket";
import { useState} from "react";
import BasketPopup from "../../BasketPopup/BasketPopup";
import { FullBasket } from "../../FullBasket/FullBasket.jsx";


const StyledNavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #fff;
    margin: 0;
`

function NavList() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFullBasketOpen, setIsFullBasketOpen] = useState(false);
 

  



  return (
    
      <StyledNavList>
          <NavListItem>Каталог</NavListItem> 
          <NavListItem>О нас</NavListItem> 
          <NavListItem>Подбор товара</NavListItem> 
          <NavListItem>Наша команда</NavListItem> 
          <NavListItem>Доставка и оплата</NavListItem> 
          <NavListItem>Контакты</NavListItem> 
          <NavBasket onClick={() => setIsCartOpen(true)}>Корзина</NavBasket>

          

          <BasketPopup 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)}
            onOpenFullBasket={() => {
                setIsCartOpen(false);
                setIsFullBasketOpen(true);
          }}
          />
          <FullBasket 
            isOpen={isFullBasketOpen} 
            onClose={() => setIsFullBasketOpen(false)}
          />
      </StyledNavList>
    
  );
}

export default NavList;
