import styled from "styled-components";

const StyledNavListItem = styled.li`
    padding: 23px 0;
    list-style-type: none;
    margin-right: 40px;
`

function NavListItem({children}) {
  return (
    <StyledNavListItem>
        {children}
    </StyledNavListItem>
  );
}

export default NavListItem;
