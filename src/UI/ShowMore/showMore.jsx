import styled from "styled-components";

const StyledShowMore = styled.button`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 60px;
    background-color: #F14F4F;
    border: none;
    color: #fff;
`

function ShowMore ({children}) {
    return (
        <StyledShowMore>
            {children}
        </StyledShowMore>
    )
}

export default ShowMore