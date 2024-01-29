import styled from "styled-components";

export default function Home() {
  return (
    <HomeDiv>
      <h1>
        Cuidamos bem do seu pokémon,<br />
        para ele cuidar bem de você
      </h1>
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  width: 100%;
  height: calc(100vh - 104px - 72px);
  
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