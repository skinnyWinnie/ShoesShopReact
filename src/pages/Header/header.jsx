import Nav from "../../components/Nav/nav";
import styled from 'styled-components';
import HeaderMain from '../../components/HeaderMain/headermain';
const StyledHeader = styled.header`
  background-color: var(--bg-color);
  background-position:  50% 70%;
  padding:  0 var(--padding-unit);

  @media(max-width: 1600px) {
    padding:  0 var(--padding-1600)
  }

  @media(max-width: 1023px) {
    padding:  0 var(--padding-laptop)
  }
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
