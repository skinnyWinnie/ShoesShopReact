import styled from "styled-components";


const StyledBtnRed = styled.a`
    display: inline-block;
    width: 250px;
    height: 60px;
    color: #fff;
    text-decoration: none;
    background-color: #F14F4F;
    margin-top: 35px;
    text-align: center;
    line-height: 60px;
`

function BtnRed({children}) {
  return (
    <StyledBtnRed>
      {children}
    </StyledBtnRed>
  );
}

export default BtnRed;
