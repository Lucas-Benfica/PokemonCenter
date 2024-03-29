import styled from "styled-components"
import SecondHeader from "../../components/secondHeader"
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import RegionSelect from "../../components/formComponents/regionSelect";
import CitySelect from "../../components/formComponents/citySelect";
import TeamRegistration from "../../components/formComponents/teamRegistration";
import DateSelect from "../../components/formComponents/dateSelect";
import TimeSelect from "../../components/formComponents/timeSelect";
import Budget from "../../components/formComponents/Budget";
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

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
    date: yup.string().required(),
    time: yup.string().required(),
});

export default function ScheduleAppointment() {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(formSchema),
    });

    const [pokemonTeam, SetPokemonTeam] = useState<{ name: string }[]>([{ name: '' }, { name: '' }]);
    const [date, setDate] = useState<string>();
    const [region, setRegion] = useState<string>();
    const [totalCost, setTotalCost] = useState<number>(0);

    useEffect(() => {
        const pokemons = pokemonTeam.filter(poke => poke.name);
        setValue("pokemons", pokemons);
    }, [pokemonTeam]);

    const router = useRouter();

    async function onSubmitForm(data: FormValues | any) {
        try {
            console.log(data);
            if (data.pokemons.length === 0) {
                return await router.push({
                    pathname: '/schedule-appointment/failure',
                    query: {
                        amount: data.pokemons.length,
                    }
                })
            }

            await router.push({
                pathname: '/schedule-appointment/success',
                query: {
                    date: data.date,
                    time: data.time,
                    amount: data.pokemons.length,
                }
            })
        } catch (error) {
            console.error('Error: ', error);

            await router.push({
                pathname: '/schedule-appointment/failure',
                query: {
                    message: "Ocorreu um erro durante o envio do formulário.",
                }
            })
        }

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
                        <RegionSelect setValue={setValue} setRegion={setRegion} />
                        <ErrorSpan>{errors.region?.message}</ErrorSpan>
                    </FormColumn>
                    <FormColumn>
                        <FormLabel htmlFor="city">Cidade</FormLabel>
                        <CitySelect setValue={setValue} region={region} />
                        <ErrorSpan>{errors.city?.message}</ErrorSpan>
                    </FormColumn>
                </FormRow>

                <TeamRegistration pokemonTeam={pokemonTeam} SetPokemonTeam={SetPokemonTeam} />
                <ErrorSpan>{errors.pokemons?.message}</ErrorSpan>

                <FormRow>
                    <FormColumn>
                        <FormLabel htmlFor="date">Data para Atendimento</FormLabel>
                        <DateSelect setValue={setValue} setDate={setDate} />
                        <ErrorSpan>{errors.date?.message}</ErrorSpan>
                    </FormColumn>
                    <FormColumn>
                        <FormLabel htmlFor="time">Horário de Atendimento</FormLabel>
                        <TimeSelect setValue={setValue} date={date} />
                        <ErrorSpan>{errors.time?.message}</ErrorSpan>
                    </FormColumn>
                </FormRow>

                <DividingLine />

                <Budget pokemonTeam={pokemonTeam} setTotalCost={setTotalCost} />

                <Conclusion>
                    <h1>Valor Total: R$ {totalCost.toFixed(2)}</h1>
                    <button type="submit">Concluir Agendamento</button>
                </Conclusion>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    limit={3}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Form>
        </FormContainer >
    )
}

export const FormContainer = styled.div`
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
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 30px;
    @media (max-width: 550px) {
        padding: 10px;
    }
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
    width: 100%;
    max-width: 265px;
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

    @media (max-width: 500px) {
        h1{
            font-size: 18px;
        }
        button{
            width: 150px;
            font-size: 12px;
        }
    }
`