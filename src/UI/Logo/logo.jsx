import styled from "styled-components";
import logo from '../../assets/icons/logo.png'

const StyledLogo = styled.div`
  padding: 18px 0;
  margin-right: 100px;
`

function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt="123"/>
    </StyledLogo>
  );
}

export default Logo;
