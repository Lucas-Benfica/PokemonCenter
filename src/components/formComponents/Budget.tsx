import styled from "styled-components";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
const URL = process.env.NEXT_PUBLIC_API_LINK;

const romanNumerals: any = {
    'i': 1,
    'ii': 2,
    'iii': 3,
    'iv': 4,
    'v': 5,
    'vi': 6,
    'vii': 7,
    'viii': 8,
    'ix': 9
};

interface BudgetProps {
    pokemonTeam: { name: string }[];
    setTotalCost: Dispatch<SetStateAction<number>>;
}

export default function Budget(props: BudgetProps) {

    const { pokemonTeam, setTotalCost } = props;
    const [pokemonsArray, setPokemonsArray] = useState<{ name: string; generation: number }[]>([]);
    const [pokemons, setPokemons] = useState<{ [key: string]: number }>({});
    const [maxGeneration, setMaxGeneration] = useState(1);
    const [subTotal, setSubTotal] = useState<number>(0)
    const [generationalTax, setGenerationalTax] = useState<number>(0)
    const value = 70.0;

    function extractRomanNumeral(generation: string): string {
        return generation.split('-').pop() || '';
    }
    function getPokemonGeneration(pokemon: string): number {
        let generationDecimal = 0;
        if(!pokemon) return generationDecimal;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(data => {
            // Aqui, data conterá informações sobre o Pokémon Pikachu
            const speciesUrl = data.species.url;
            
            // Fazer uma nova requisição para obter os detalhes da espécie do Pokémon
            return fetch(speciesUrl);
        })
        .then(response => response.json())
        .then(speciesData => {
            // Aqui, speciesData conterá informações sobre a espécie do Pokémon
            const generationUrl = speciesData.generation.url;
            
            // Fazer uma nova requisição para obter os detalhes da geração do Pokémon
            return fetch(generationUrl);
        })
        .then(response => response.json())
        .then(generationData => {
            // Aqui, generationData conterá informações sobre a geração do Pokémon
            const roman = extractRomanNumeral(generationData.name);
            generationDecimal = romanNumerals[roman];
        })
        .catch(error => console.error('Erro:', error));
        // Retorna o numero da geração do Pokémon
        return generationDecimal;
    }
    function calcSubTotal() {
        const totalSub = pokemonsArray.length * value
        setSubTotal(totalSub);
        calcGenerationalTax(totalSub);
    }
    function calcGenerationalTax(totalSub: number) {
        const percentual = maxGeneration * 0.03;
        let tax = 0;
        if (percentual > 0.3){
            tax = 0.3 * totalSub;
        }
        else {
            tax = percentual * totalSub;
        }
        setGenerationalTax(tax);
        setTotalCost(totalSub + tax);
    }

    useEffect(() => {
        const pokeList = pokemonTeam.filter(poke => poke.name);
        setPokemonsArray(pokeList.map(poke => {
            let generation: number = 0;
            if (pokemons[poke.name]) {
                generation = pokemons[poke.name];
                return { name: poke.name, generation: generation }
            }

            generation = getPokemonGeneration(poke.name);
            setPokemons(prevObj => ({
                ...prevObj,
                [poke.name]: generation,
            }))
            if (generation > maxGeneration) {
                setMaxGeneration(generation);
            }
            return { name: poke.name, generation: generation }
        }));

    }, [pokemonTeam]);

    useEffect(() => {
        calcSubTotal();
    }, [pokemonsArray]);

    return (
        <BudgetDiv>
            <div>
                <h1>Número de pokémons a serem atendidos:</h1>
                <h2>{pokemonsArray.length}</h2>
            </div>
            <div>
                <h1>Atendimento unitário por pokémon:</h1>
                <h2>R$ {value.toFixed(2)}</h2>
            </div>
            <div>
                <h1>Subtotal:</h1>
                <h2>R$ {subTotal.toFixed(2)}</h2>
            </div>
            <div>
                <h1>Taxa geracional*: </h1>
                <h2>R$ {generationalTax.toFixed(2)}</h2>
            </div>
            <p>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</p>
        </BudgetDiv>
    )
}

const BudgetDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--inputsform);
    margin-bottom: 32px;
    div{
        display: flex;
        justify-content: space-between;        
    }
    h1, h2{
        font-size: 14px;
        font-weight: 400;
    }
    p{
        font-weight: 400;
        font-size: 8px;
    }
    @media (max-width: 500px) {
        p{
            font-size: 10px;
        }
    }
`