import { useEffect, useState } from "react";
import { FormSelect, Option, OptionList } from "./styles";
import axios, { AxiosResponse } from 'axios';

interface DateSelectProps {
    setValue: any;
}

export default function DateSelect(props: DateSelectProps) {
    const { setValue } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [availableDates, setAvailableDates] = useState<string[]>()

    useEffect(() => {

        const fetchData = async (): Promise<void> => {
            try {
                const response: AxiosResponse = await axios.get('http://localhost:3000/api/scheduling/date');
                if(response.data) setAvailableDates(response.data);
                console.log("AQUI CARREGFOU")
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    function toggleOptions() {
        setIsOpen(!isOpen);
    };

    function handleOptionClick(value: string) {
        setSelectedOption(value);
        setValue("date", value);
        setIsOpen(false);
    };

    return (
        <FormSelect onClick={toggleOptions} open={isOpen}>
            {selectedOption ? selectedOption : 'Selecione uma data'}
            <span>{'>'}</span>
            {isOpen && (
                <OptionList>
                    <Option onClick={() => handleOptionClick('')}>-</Option>
                    { availableDates && availableDates.map((date, index) => (
                        <Option key={index} onClick={() => handleOptionClick(date)}>{date}</Option>
                    ))}
                </OptionList>
            )}
        </FormSelect>
    )
}