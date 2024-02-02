import { useEffect, useState } from "react";
import { FormSelect, OptionList, Option } from "./styles";
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const URL = process.env.NEXT_PUBLIC_API_LINK_2;

interface RegionSelectProps {
    setValue: any;
    setRegion: Dispatch<SetStateAction<string | undefined>>;
}

export default function RegionSelect(props: RegionSelectProps) {

    const { setValue, setRegion } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [regionsList, setRegionsList] = useState<{ name: string, url: string }[]>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await toast.promise(
                    fetch(`${URL}/region/`),
                    {
                        pending: 'Searching for regions...',
                        success: 'Regions fetched successfully! 👌',
                        error: 'Failed to fetch regions! 🤯'
                    }
                )
                .then(response => response.json())
                .then(data => {
                    setRegionsList(data.results);
                })

            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchData();
    }, []);

    function toggleOptions() {
        setIsOpen(!isOpen);
    };

    function handleOptionClick(value: string) {
        setSelectedOption(value);
        setValue("region", value);
        setRegion(value);
        setIsOpen(false);
    };

    return (
        <>
            <FormSelect onClick={toggleOptions} open={isOpen}>
                {selectedOption ? selectedOption : 'Região'}
                <span>{'>'}</span>
                {isOpen && (
                    <OptionList>
                        <Option onClick={() => handleOptionClick('')}>-</Option>
                        {regionsList && regionsList.map((region, index) => (
                            <Option key={index} onClick={() => handleOptionClick(region.name)}>{region.name}</Option>
                        ))}
                    </OptionList>
                )}
            </FormSelect>
        </>
    )
}