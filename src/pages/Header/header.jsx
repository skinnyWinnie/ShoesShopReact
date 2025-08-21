import Nav from "../../components/Nav/nav";
import styled from 'styled-components';
import HeaderMain from '../../components/HeaderMain/headermain';
const StyledHeader = styled.header`
  background-color: #484283;
  background-position:  50% 70%;
  padding:  0 19%;
`

function Header() {
  return (
    <StyledHeader>
      <Nav/>
      <HeaderMain/>
    </StyledHeader>
  );
}

export default Header;
