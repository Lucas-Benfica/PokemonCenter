import styled from "styled-components"
import { FormContainer } from "."
import SecondHeader from "../../components/secondHeader"
import { useRouter } from 'next/router';

interface successProps { }

export default function Success(props: successProps) {
    const router = useRouter();
    const { date, time, amount } = router.query;
    let timeApart = [''];
    if(time && typeof time === 'string') {
        timeApart = time.split(':');
    }
        return (
        <FormContainer>
            <SecondHeader page="schedule-appointment" />
            <ResultDiv>
                <h1>Consulta Agendada</h1>
                <img src="/check.svg" alt="check" />
                <p>Seu agendamento para dia {date}, às {timeApart[0]}h:{timeApart[1]}m,
                    para {amount} pokémons foi realizado com sucesso!</p>
                <button onClick={() => router.push('/schedule-appointment')}>Fazer Novo Agendamento</button>
            </ResultDiv>
        </FormContainer>
    )
}

export const ResultDiv = styled.div`
    width: 408px;
    height: 255px;
    margin: 257px auto;
    border-radius: 8px;
    background-color: rgba(223, 134, 134, 0.04);
    border: 1px solid var(--result);
    padding: 20px 0 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1{
        font-weight: 700;
        font-size: 20px;
        color: var(--lightblack);
    }

    p{
        width: 350px;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: var(--inputsform);
    }

    button{
        background-color: var(--red);
        width: 197px;
        height: 42px;
        border-radius: 30px;
        cursor: pointer;
        border: none;
        color: var(--white);
        font-weight: 700;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`