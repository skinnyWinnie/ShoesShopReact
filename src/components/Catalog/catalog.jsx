import styled from "styled-components";
import Params from "../Params/params";
import ProductGrid from "../ProductGrid/productGrid";


const StyledCatalog = styled.section`
    display: flex;
    padding:  0 19%;
`


function Catalog () {
    
    return (
        <StyledCatalog>
            <Params/>
            <ProductGrid/>
        </StyledCatalog>
    )
}

export default Catalog