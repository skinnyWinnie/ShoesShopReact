import styled from "styled-components";

const StyledShowMore = styled.button`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 60px;
    background-color: var(--button-color);
    border: none;
    color: #fff;
    cursor: pointer;
`

function ShowMore ({children, onClick}) {
    return (
        <StyledShowMore onClick={onClick}>
            {children}
        </StyledShowMore>
    )
}

export default ShowMore