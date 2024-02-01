import { useState } from "react";
import { FormSelect, Option, OptionList } from "./styles";

interface PokemonSelectProps {
    index: number;
    pokemonTeam: { name: string }[];
    SetPokemonTeam: any;
}

export default function PokemonSelect(props: PokemonSelectProps){

    const { index, pokemonTeam, SetPokemonTeam } = props;

    const [isOpen, setIsOpen] = useState(false);

    function updatePokemonTeam(newPokemon: string){
        const newTeam = [...pokemonTeam];
        newTeam[index] = { name: newPokemon };
        SetPokemonTeam(newTeam);
        setIsOpen(false);
    }

    function toggleOptions(){
        setIsOpen(!isOpen);
    };


    return (
        <FormSelect onClick={toggleOptions} open = {isOpen.toString()}>
            { pokemonTeam[index].name !== "" ? pokemonTeam[index].name : 'Selecione seu pokémon'}
            <span>{'>'}</span>
            {isOpen && (
                <OptionList>
                    <Option onClick={() => updatePokemonTeam('')}>-</Option>
                    <Option onClick={() => updatePokemonTeam('Pikachu')}>Kanto</Option>
                    <Option onClick={() => updatePokemonTeam('Charizard')}>Johto</Option>
                    <Option onClick={() => updatePokemonTeam('Macaco')}>Hoenn</Option>
                    <Option onClick={() => updatePokemonTeam('Vaca')}>Sinnoh</Option>
                </OptionList>
            )}
        </FormSelect>
    )
}