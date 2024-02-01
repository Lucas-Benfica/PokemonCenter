import { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonSelect from "./pokemonSelect";

interface TeamRegistrationProps {
    pokemonTeam: { name: string }[];
    SetPokemonTeam: any;
}

export default function TeamRegistration(props: TeamRegistrationProps) {

    //const { allPokemons, setAllPokemons } = useState<any>();
    const { pokemonTeam, SetPokemonTeam } = props;

    useEffect(() => {
         
    }, [])

    function addPokemonSelect() {
        if (pokemonTeam.length === 6) return;

        const newTeam = [...pokemonTeam];
        newTeam.push({ name: "" });
        SetPokemonTeam(newTeam);
    }


    return (
        <RegistrationContainer>
            <Title>Cadastre seu time</Title>
            <SubTitle>Atendemos até 06 pokémons por vez</SubTitle>

            {
                pokemonTeam.map((_pokemon, index) => (
                    <PokemonChoose key={index}>
                        <Title>Pokémon 0{index + 1}</Title>
                        <PokemonSelect index={index} pokemonTeam={pokemonTeam} SetPokemonTeam={SetPokemonTeam} />
                    </PokemonChoose>
                ))
            }

            {
                pokemonTeam.length < 6 && (
                    <ButtonAddMore type="button" onClick={addPokemonSelect}>
                        <p>Adicionar novo pokémon ao time...</p>
                        <span>+</span>
                    </ButtonAddMore>
                )
            }
        </RegistrationContainer>
    );
}

const RegistrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 32px;
`
const Title = styled.h1`
    font-size: 12px;
    font-weight: 700;
    color: var(--lightblack);
    min-width: 75px;
`
const SubTitle = styled.h2`
    font-size: 12px;
    font-weight: 500;
    color: var(--inputsform);
    margin-top: 8px;
    margin-bottom: 16px;
`
const PokemonChoose = styled.div`
    width: 100%;
    display: flex;
    gap: 38px;
    align-items: center;
    margin-bottom: 32px;
`
const ButtonAddMore = styled.button`
    width: 253px;
    height: 42px;
    border-radius: 30px;
    border: 1px solid var(--lightblack);
    padding: 0 14px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    color: var(--lightblack);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
    span{
        font-size: 16px;
    }
`