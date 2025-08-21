import styled from "styled-components";
import Catalog from "../../components/Catalog/catalog";
import AboutUs from "../../components/AboutUs/AboutUs";
import Selection from "../../components/Selection/Selection";
import OurTeam from '../../components/OurTeam/OurTeam'
import Questions from "../../components/Questions/Questions";
import Contacts from "../../components/Contacts/Contacts";
import QuestionsFromUs from "../../components/QuestionsFromUs/QuestionsFromUs";
// import { FullCardItem } from "../../components/FullCardItem/FullCardItem";
const StyledMain = styled.div`
    margin-top: 60px;
    margin-bottom: 40px;
    color: #444B58;
`
const StyledH2 = styled.h2`
    padding: 0 19%;
`



function Main () {
    return (
        <StyledMain>
            <StyledH2>Каталог</StyledH2>
            {/* <FullCardItem/> */}
            <Catalog></Catalog>
            <AboutUs/>
            <Selection/>
            <OurTeam/>
            <Questions/>
            <Contacts/>
            <QuestionsFromUs/>
        </StyledMain>
    );
}

export default Main