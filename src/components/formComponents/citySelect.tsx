import { useEffect, useState } from "react";
import { FormSelect, OptionList, Option } from "./styles";
const URL = process.env.NEXT_PUBLIC_API_LINK_2;

interface CitySelectProps {
    setValue: any;
    region: string | undefined;
}

export default function CitySelect(props: CitySelectProps) {

    const { setValue, region } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [cityList, setCityList] = useState<{ name: string, url: string }[]>()

    useEffect(() => {
        if (!region) return;
        fetch(`${URL}/region/${region}`)
            .then(response => response.json())
            .then(regionData => {
                const locations: { name: string, url: string }[] = regionData.locations;
                const cities: { name: string, url: string }[] = locations.filter(city => city.name.includes('city'));
                setCityList(cities);
            })
            .catch(error => console.error('Erro:', error));
    }, [region]);

    function toggleOptions() {
        setIsOpen(!isOpen);
    };

    function handleOptionClick(value: string) {
        setSelectedOption(value);
        setValue("city", value);
        setIsOpen(false);
    };

    return (
        <FormSelect onClick={toggleOptions} open={isOpen}>
            {selectedOption ? selectedOption : 'Cidade'}
            <span>{'>'}</span>
            {isOpen && (
                <OptionList>
                    <Option onClick={() => handleOptionClick('')}>-</Option>
                    {cityList && cityList.map((city, index) => (
                        <Option key={index} onClick={() => handleOptionClick(city.name)}>{city.name}</Option>
                    ))}
                </OptionList>
            )}
        </FormSelect>
    )
}