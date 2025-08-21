import Logo from "../../UI/Logo/logo";
import styled from "styled-components";
import NavList from "./NavList/NavList";

const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
`

function Nav() {

  return (
    <StyledNav>
      <Logo/>
      <NavList/>
    </StyledNav>
  );
}

export default Nav;
