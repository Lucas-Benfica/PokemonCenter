import { useEffect, useState } from "react";
import { FormSelect, Option, OptionList } from "./styles";

interface TimeSelectProps {
    setValue: any;
    date: string | undefined;
}

export default function TimeSelect(props: TimeSelectProps) {
    const { setValue, date } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [availableTimes, setAvailableTimes] = useState<string[]>();

    useEffect(() => {
        if(!date) return
        fetch(`/api/scheduling/time`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: date
            })
        })
            .then(response => response.json())
            .then(data => setAvailableTimes(data))
            .catch(error => console.error('Erro:', error));
    }, [date]);


    function toggleOptions() {
        setIsOpen(!isOpen);
    };

    function handleOptionClick(value: string) {
        setSelectedOption(value);
        setValue("time", value);
        setIsOpen(false);
    };

    return (
        <FormSelect onClick={toggleOptions} open={isOpen}>
            {selectedOption ? selectedOption : 'Selecione um horário'}
            <span>{'>'}</span>
            {isOpen && (
                <OptionList>
                    <Option onClick={() => handleOptionClick('')}>-</Option>
                    {availableTimes && availableTimes.map((time, index) => (
                        <Option key={index} onClick={() => handleOptionClick(time)}>{time}</Option>
                    ))}
                </OptionList>
            )}
        </FormSelect>
    )
}