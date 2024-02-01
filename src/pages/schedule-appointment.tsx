import styled from "styled-components"
import SecondHeader from "../components/secondHeader"
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import RegionSelect from "../components/formComponents/regionSelect";
import CitySelect from "../components/formComponents/citySelect";
import TeamRegistration from "../components/formComponents/teamRegistration";
import DateSelect from "../components/formComponents/dateSelect";
import TimeSelect from "../components/formComponents/timeSelect";

interface FormValues {
    name: string;
    lastName: string;
    region: string;
    city: string;
    pokemons: { name: string; generation: string }[];
    date: string;
    time: string;
}

const formSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    lastName: yup.string().required(),
    region: yup.string().required(),
    city: yup.string().required(),
    pokemons: yup.array().of(
        yup.object({
            name: yup.string().required(),
        })
    ),
    date: yup.string().required(), //date
    time: yup.string().required(),   
});

export default function ScheduleAppointment() {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(formSchema),
    });

    const [pokemonTeam, SetPokemonTeam] = useState<{ name: string}[]>([{name: ''}, {name: ''}]);

    let posis = [{name: "sjksjlks"}]

    const onSubmitForm = (data: any) => {
        //setValue("pokemons", pokemonTeam);
        console.log(data);
    };

    return (
        <FormContainer>
            <SecondHeader page="schedule-appointment" />
            <TitleForm>Preencha o formulário abaixo para agendar sua consulta</TitleForm>
            <Form onSubmit={handleSubmit(onSubmitForm)} >
                <FormRow>
                    <FormColumn>
                        <FormLabel htmlFor="name">Nome</FormLabel>
                        <FormInput
                            {...register("name")}
                            placeholder="Digite seu nome"
                            type="text"
                            name="name"
                            required
                        />
                        <ErrorSpan>{errors.name?.message}</ErrorSpan>
                    </FormColumn>
                    <FormColumn>
                        <FormLabel htmlFor="lastName">Sobrenome</FormLabel>
                        <FormInput
                            {...register("lastName")}
                            placeholder="Digite seu sobrenome"
                            type="text"
                            name="lastName"
                            required
                        />
                        <ErrorSpan>{errors.lastName?.message}</ErrorSpan>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <FormLabel htmlFor="region">Região</FormLabel>
                        <RegionSelect setValue={setValue} />
                        <ErrorSpan>{errors.region?.message}</ErrorSpan>
                    </FormColumn>
                    <FormColumn>
                        <FormLabel htmlFor="city">Cidade</FormLabel>
                        <CitySelect setValue={setValue} />
                        <ErrorSpan>{errors.city?.message}</ErrorSpan>
                    </FormColumn>
                </FormRow>
                
                <TeamRegistration pokemonTeam={pokemonTeam} SetPokemonTeam={SetPokemonTeam} />
                <ErrorSpan>{errors.pokemons?.message}</ErrorSpan>

                <FormRow>
                    <FormColumn>
                        <FormLabel htmlFor="date">Data para Atendimento</FormLabel>
                        <DateSelect setValue={setValue} />
                        <ErrorSpan>{errors.date?.message}</ErrorSpan>
                    </FormColumn>
                    <FormColumn>
                        <FormLabel htmlFor="time">Horário de Atendimento</FormLabel>
                        <TimeSelect setValue={setValue} />
                        <ErrorSpan>{errors.time?.message}</ErrorSpan>
                    </FormColumn>
                </FormRow>

                <DividingLine />

                <Budget>
                    <div>
                        <h1>Número de pokémons a serem atendidos:</h1>
                        <h2>01</h2>
                    </div>
                    <div>
                        <h1>Atendimento unitário por pokémon:</h1>
                        <h2>R$ 70,00</h2>
                    </div>
                    <div>
                        <h1>Subtotal:</h1>
                        <h2>R$ 70,00</h2>
                    </div>
                    <div>
                        <h1>Taxa geracional*: </h1>
                        <h2>R$ 2,10</h2>
                    </div>
                    <p>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</p>
                </Budget>

                <Conclusion>
                    <h1>Valor Total: R$ 72,10</h1>
                    <button type="submit">Concluir Agendamento</button>
                </Conclusion>

            </Form>
        </FormContainer >
    )
}

const FormContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 104px - 72px);
    display: flex;
    flex-direction: column;  
`
const TitleForm = styled.h1`
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    color: var(--lightblack);
    text-align: center;
    margin: 32px auto;
`
const Form = styled.form`
    width: 550px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 30px;
`
const FormRow = styled.div`
  display: flex;
  margin-bottom: 32px;
  gap: 18px;
`;
const FormColumn = styled.div`
  flex: 1 1 50%; 
`;
const FormLabel = styled.label`
    font-size: 12px;
    font-weight: 700;
    color: var(--lightblack);
`;
const FormInput = styled.input`
    width: 265px;
    height: 45px;
    padding: 13px 14px;
    margin-top: 8px;
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--inputsform);
    font-size: 14px;
    font-weight: 500;
`;
const ErrorSpan = styled.span`
    font-size: 12px;
    color: var(--red);
`
const DividingLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--border);
    margin-bottom: 32px;
`
const Budget = styled.div`
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
`
const Conclusion = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 42px;
    margin-bottom: 100px;

    h1{
        font-weight: 600;
        font-size: 24px;
        color: var(--lightblack);
        line-height: 29px;
    }

    button {
        width: 183px;
        height: 42px;
        border-radius: 30px;
        background-color: var(--red);
        color: var(--white);
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
    }

`