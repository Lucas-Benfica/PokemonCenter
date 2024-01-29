import styled from "styled-components";
import Footer from "../components/footer";

export default function Home() {
  return (
    <HomeDiv>
      <h1>
        Cuidamos bem do seu pokémon,<br />
        para ele cuidar bem de você
      </h1>
      <Footer />
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 104px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: var(--homeimage);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  position: relative;
  z-index: -1;

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    color: var(--white);
  }
`