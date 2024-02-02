import { FormContainer } from ".";
import SecondHeader from "../../components/secondHeader";
import { ResultDiv } from "./success";
import { useRouter } from 'next/router';

interface failureProps {}

export default function Failure(props: failureProps){
    const router = useRouter();
    const { message, amount } = router.query;
    return (
        <FormContainer>
            <SecondHeader page="schedule-appointment" />
            <ResultDiv>
                <h1>Houve um problema no agendamento</h1>
                <img src="/warning.svg" alt="warning" />
                <p>{amount ? "Nenhum pokémon foi selecionado" : message}</p>
                <button onClick={() => router.push('/schedule-appointment')}>Fazer Novo Agendamento</button>
            </ResultDiv>
        </FormContainer>
    )
}