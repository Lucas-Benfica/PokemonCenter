import { useEffect, useState } from "react";
import { FormSelect, Option, OptionList } from "./styles";
import { Dispatch, SetStateAction } from 'react';

interface PokemonSelectProps {
    index: number;
    pokemonTeam: { name: string }[];
    SetPokemonTeam:  Dispatch<SetStateAction<{ name: string }[]>>;
    allPokemons: { name: string }[];
    getMorePokemon: () => void;
}

export default function PokemonSelect(props: PokemonSelectProps){

    const { index, pokemonTeam, SetPokemonTeam, allPokemons, getMorePokemon } = props;

    const [isOpen, setIsOpen] = useState(false);

    function updatePokemonTeam(newPokemon: string){
        const newTeam: { name: string }[]= [...pokemonTeam];
        newTeam[index] = { name: newPokemon };
        SetPokemonTeam(newTeam);
        setIsOpen(false);
    }

    function toggleOptions(){
        setIsOpen(!isOpen);
    };

    useEffect(()=>{
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    getMorePokemon();
                }
            });
        });
        const observerTarget = document.querySelector('#observer');
        if (observerTarget instanceof Element) {
            intersectionObserver.observe(observerTarget);
        }
        
        return () => intersectionObserver.disconnect();
    })


    return (
        <FormSelect onClick={toggleOptions} open = {isOpen}>
            { pokemonTeam[index].name !== "" ? pokemonTeam[index].name : 'Selecione seu pokémon'}
            <span>{'>'}</span>
            {isOpen && (
                <OptionList>
                    <Option onClick={() => updatePokemonTeam('')}>-</Option>
                    { allPokemons && allPokemons.map((pokemon, i) => (
                        <Option key={i} onClick={() => updatePokemonTeam(pokemon.name)}>{pokemon.name}</Option>
                    ))}
                    <Option id={"observer"}></Option>
                </OptionList>
            )}
        </FormSelect>
    )
}