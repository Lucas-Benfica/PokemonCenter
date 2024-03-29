import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
interface HeaderProps { }

export default function Header(props: HeaderProps) {
    const [seeLogo, setSeeLogo] = useState<boolean>(true);
    let timer: NodeJS.Timeout;
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setSeeLogo(false), 5000);

        return () => clearTimeout(timer);
    }, []);

    function handleMouseEnter() {
        clearTimeout(timer);
        setTimeout(() => setSeeLogo(true), 700);
    };
    function handleMouseLeave() {
        clearTimeout(timer);
        setSeeLogo(false);
    };

    function goToScheduleAppointment() {
        router.push('/schedule-appointment');
    }

    return (
        <HeaderContainer>
            <Logo
                href="/"
                seelogo={seeLogo.toString()}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src="/images/white-pokeball.svg" alt="home" />
                <h1>Centro Pokémon</h1>
            </Logo>
            <OptionsHeader>
                <Link href="/about-us">
                    Quem Somos
                </Link>
                <button onClick={goToScheduleAppointment}>
                    Agendar Consulta
                </button>
            </OptionsHeader>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5.8%;
    background-color: var(--white);
    height: 104px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
`
const Logo = styled(Link) <{ seelogo: string }>`
    width: ${(props) => (props.seelogo === "true") ? "259px" : "62px"};
    height: 62px;
    border-radius: 50px;
    padding: 13px;
    padding-right: ${(props) => (props.seelogo === "true") ? "13px" : "28px"};
    background-color: var(--red);
    color: var(--white);
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 38px;
        width: 38px;
    }

    h1 {
        font-weight: 600;
        font-size: 20px;
        height: 24px;
        width: 162px;
        opacity: ${(props) => (props.seelogo === "true") ? "1" : "0"};
        transition: opacity 0.1s ease;
    }

    &:hover {
        cursor: pointer;
        width: 259px;
        justify-content: space-between;
        padding-right: 28px;
    }
    transition: width 1s;

    @media (max-width: 500px) {
        width: 62px;

        h1 {
            opacity: 0;
        }
        &:hover {
            cursor: pointer;
            width: 62px;
            justify-content: space-between;
        }
    }
`;
const OptionsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 14px;
    line-height: 17px;

    a {
        color: var(--black);
        font-weight: 400;
    }

    button {
        color: var(--white);
        font-weight: 700;
        background-color: var(--red);
        padding: 13px 24px;
        border-radius: 30px;
        cursor: pointer;
        border: none;
    }
    @media (max-width: 500px) {
        gap: 20px;
    }
`