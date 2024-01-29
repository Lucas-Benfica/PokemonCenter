import styled from "styled-components"
import SecondHeader from "../components/secondHeader"

export default function AboutUs(){
    return (
        <AboutUsDiv>
            <SecondHeader page="about-us" />
        </AboutUsDiv>
    )
}

const AboutUsDiv = styled.div`
    width: 100%;
    height: calc(100vh - 104px - 72px);

    display: flex;
    flex-direction: column;

`