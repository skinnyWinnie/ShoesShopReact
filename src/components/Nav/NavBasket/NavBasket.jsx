import styled from "styled-components";
import basketImg from '../../../assets/icons/Vector.png'
import { useCart } from "../../CardContext";
const StyledNavBasket = styled.li`
    padding: 23px 0;
    list-style-type: none;
    position: relative;
    cursor: pointer;
`
const StyledSpan = styled.span`
    padding-left: 6px;
    margin-top: -3px;
    padding-bottom: 17px;
    display: inline-block;
    position: absolute;
    top: 30px;
    border-bottom: 1px solid #fff;
`

const StyledQuantity = styled.span`
    position: absolute;
    width: 0px;
    height: 10px;
    top: 9px;
    right: -9px;
    background: #ff4444;
    color: white;
    border-radius: 50%;
    padding: 3px 8px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

function NavBasket({children, onClick}) {
    const { cart } = useCart();
  return (
    <StyledNavBasket onClick={onClick}>
        {children}
        <StyledSpan>
            <img src={basketImg} alt="1234" />
            <StyledQuantity>{cart.length}</StyledQuantity>
        </StyledSpan>
    </StyledNavBasket>
  );
}

export default NavBasket;
