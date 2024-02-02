import { useEffect, useState } from "react";
import { FormSelect, Option, OptionList } from "./styles";
import { Dispatch, SetStateAction } from 'react';

interface DateSelectProps {
    setValue: any;
    setDate: Dispatch<SetStateAction<string | undefined>>;
}

export default function DateSelect(props: DateSelectProps) {
    const { setValue, setDate } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [availableDates, setAvailableDates] = useState<string[]>()

    useEffect(() => {
        fetch(`/api/scheduling/date`)
            .then(response => response.json())
            .then(data => {
                setAvailableDates(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    function toggleOptions() {
        setIsOpen(!isOpen);
    };

    function handleOptionClick(value: string) {
        setSelectedOption(value);
        setValue("date", value);
        setDate(value);
        setIsOpen(false);
    };

    return (
        <FormSelect onClick={toggleOptions} open={isOpen}>
            {selectedOption ? selectedOption : 'Selecione uma data'}
            <span>{'>'}</span>
            {isOpen && (
                <OptionList>
                    <Option onClick={() => handleOptionClick('')}>-</Option>
                    {availableDates && availableDates.map((date, index) => (
                        <Option key={index} onClick={() => handleOptionClick(date)}>{date}</Option>
                    ))}
                </OptionList>
            )}
        </FormSelect>
    )
}