import styled from 'styled-components';
import backgroundImage from '../../assets/background.png'; 
import BtnRed from '../../UI/Button/btnred';
const StyledHeaderMain = styled.header`
    padding: 100px 0;
    color: #fff;
    background: url(${backgroundImage}) no-repeat 56% 60%;
`

const StyledH2 = styled.h2`
    font-size: 32px;
    max-width: 500px;
    line-height: 50px;
`
const StyledP = styled.p`
    margin-top: 20px;
    font-size: 16px;
    max-width: 450px;
    line-height: 22px;
`

function HeaderMain() {
  return (
    <StyledHeaderMain>
      <StyledH2>Кроссовки известных брендов с доставкой по России и СНГ</StyledH2>
            <StyledP >Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</StyledP>    
            <BtnRed>Перейти к покупкам</BtnRed>
    </StyledHeaderMain>
  );
}

export default HeaderMain;
