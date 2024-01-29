import styled from "styled-components"

interface FooterProps {}

export default function Footer(props: FooterProps) {
    return (
        <FooterContainer>
            Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 72px;
    background-color: var(--lightblack);
    color: var(--white);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-top: auto;
    position: absolute;
    bottom: 0;
`