import styled from "styled-components"
import SecondHeader from "../components/secondHeader"

export default function AboutUs() {
    return (
        <AboutUsDiv>
            <SecondHeader page="about-us" />
            <BodyText>
                <h1>O Centro Pokémon</h1>
                <p>
                    Seja bem-vindo ao Centro Pokémon, onde o bem-estar do seu Pokémon é nossa prioridade número um. Sabemos o quanto seus companheiros Pokémon são importantes para você, e estamos aqui para garantir que eles recebam o tratamento necessário para uma rápida recuperação após batalhas desafiadoras.
                </p>
                <h1>Como funciona o tratamento no Centro Pokémon?</h1>
                <p>
                    No Centro Pokémon, utilizamos métodos tradicionais com mais de 20 anos de experiência combinados com a mais alta tecnologia disponível. Nossa equipe especializada cuidará do seu Pokémon com o máximo de cuidado e dedicação, garantindo uma recuperação completa e rápida.
                </p>
                <h1>O melhor para seu Pokémon</h1>
                <p>
                    Aqui no Centro Pokémon, seu Pokémon receberá o tratamento de que precisa para alcançar seu potencial máximo. Desde consultas de rotina até tratamentos especializados, estamos comprometidos em oferecer os melhores cuidados para garantir a saúde e felicidade do seu Pokémon.
                </p>
                <h1>Alta Tecnologia</h1>
                <p>
                    Utilizamos tecnologia de ponta para garantir os melhores resultados para seu Pokémon. Nossas instalações são equipadas com equipamentos de última geração e nossos profissionais são treinados nas técnicas mais avançadas para garantir a eficácia do tratamento.
                </p>
            </BodyText>
        </AboutUsDiv>
    )
}

const AboutUsDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 104px - 72px);
    display: flex;
    flex-direction: column;
`
const BodyText = styled.div`
    width: 100%;
    max-width: 408px;
    height: auto;
    min-height: 100%;
    margin: 34px auto 72px;
    color: var(--black);
    text-align: justify;

    h1 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 10px;
    }
    @media (max-width: 500px) {
        padding: 0 10px;
    }
`;