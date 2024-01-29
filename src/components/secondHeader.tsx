import styled from "styled-components"

interface secondHeaderProps {
    page: string
}

const objInfoPages: {
    page: string,
    title: string,
    text: string
}[] = [
        {
            page: "about-us",
            title: "Quem Somos",
            text: "A maior rede de tratamento pokémon."
        },
        {
            page: "schedule-appointment",
            title: "Agendar Consulta",
            text: "Recupere seus pokémons em 5 segundos"
        }
    ];


export default function SecondHeader(props: secondHeaderProps) {
    const { page } = props;
    let info = objInfoPages[0];

    if (page == "about-us") info = objInfoPages[0];
    else if (page == "schedule-appointment") info = objInfoPages[1];

    return (
        <SecondHeaderContainer>
            <Subpages>
                <h1>Home</h1>
                {'>'}
                <h2>{info.title}</h2>
            </Subpages>
            <Title>{info.title}</Title>
            <SubTitle>{info.text}</SubTitle>
        </SecondHeaderContainer>
    )
}

const SecondHeaderContainer = styled.div`
    width: 100%;
    height: 187px;
    background-color: var(--red);
    padding: 32px 106px;
    gap: 12px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Subpages = styled.div`
    display: flex;
    gap: 5px;
    font-weight: 300;
    font-size: 12px;
    line-height: 14.5px;
    h1{
        font-weight: 700;
        color: var(--white);
    }
    h2{
        font-weight: 700;
        color: var(--lightgray);
    }
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 32px;
    color: var(--white);
`
const SubTitle = styled.h2`
    font-weight: 400;
    font-size: 14px;
    color: var(--lightgray);
`