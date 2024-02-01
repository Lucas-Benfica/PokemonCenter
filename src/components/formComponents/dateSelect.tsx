import { useState } from "react";
import { FormSelect, Option, OptionList } from "./styles";

interface DateSelectProps {
    setValue: any;
}

export default function DateSelect(props: DateSelectProps){
    const { setValue } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    function toggleOptions(){
        setIsOpen(!isOpen);
    };

    function handleOptionClick(value: string){
        setSelectedOption(value);
        setValue("date", value);
        setIsOpen(false);
    };

    return (
        <FormSelect onClick={toggleOptions} open = {isOpen.toString()}>
            {selectedOption ? selectedOption : 'Selecione uma data'}
            <span>{'>'}</span>
            {isOpen && (
                <OptionList>
                    <Option onClick={() => handleOptionClick('')}>-</Option>
                    <Option onClick={() => handleOptionClick('Johto')}>Johto</Option>
                    <Option onClick={() => handleOptionClick('Hoenn')}>Hoenn</Option>
                    <Option onClick={() => handleOptionClick('Sinnoh')}>Sinnoh</Option>
                    <Option onClick={() => handleOptionClick('Kanto')}>Kanto</Option>
                    <Option onClick={() => handleOptionClick('Johto')}>Johto</Option>
                </OptionList>
            )}
        </FormSelect>
    )
}