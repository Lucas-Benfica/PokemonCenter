import { useState } from "react";
import { FormSelect, OptionList, Option } from "./styles";

interface CitySelectProps {
    setValue: any;
}

export default function CitySelect(props: CitySelectProps) {

    const { setValue } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    function toggleOptions(){
        setIsOpen(!isOpen);
    };

    function handleOptionClick(value: string){
        setSelectedOption(value);
        setValue("city", value);
        setIsOpen(false);
    };

    return (
        <FormSelect onClick={toggleOptions} open = {isOpen.toString()}>
            {selectedOption ? selectedOption : 'Cidade'}
            <span>{'>'}</span>
            {isOpen && (
                <OptionList>
                    <Option onClick={() => handleOptionClick('')}>-</Option>
                    <Option onClick={() => handleOptionClick('Kanto')}>Kanto</Option>
                    <Option onClick={() => handleOptionClick('Johto')}>Johto</Option>
                    <Option onClick={() => handleOptionClick('Hoenn')}>Hoenn</Option>
                    <Option onClick={() => handleOptionClick('Sinnoh')}>Sinnoh</Option>
                </OptionList>
            )}
        </FormSelect>
    )
}