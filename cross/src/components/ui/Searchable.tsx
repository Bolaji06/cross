import { useState } from "react"

interface SearchableDropDownProp {
    options: string[],
}

export default function SearchableInput: React.FC<SearchableDropDownProp> ({ options }){
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredItems, setFilteredItem] = useState<string[]>(options);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value);



    }

    return (
        <>

        </>
    )
}