import { useState } from "react"
    
    export const ClearApplyData = () => {
        
        const [category, setCategory] = useState<string>("");
        const [gost, setGost] = useState<string>("");
        const [brand, setBrand] = useState<string>("");
        const [size, setSize] = useState<string>("");
        const [availability, setAvailability] = useState<string>("");
        const [cities, setCities] = useState<string>("");
        const [open, setOpen] = useState<boolean>(false);

    let data: Array<string> = [];

    const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setCategory(value);
        setOpen(false);
    }
    if (category !== "") {
        data.push(category);
        }
    
    const onChangeGost = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setGost(value);
        setOpen(false);
    }
    if (gost !== "") {
        data.push(gost);
        }

    const onChangeBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setBrand(value);
        setOpen(false);
    }
    if (brand !== "") {
        data.push(brand);
        }

    const onChangeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setSize(value);
        setOpen(false);
    }
    if (size !== "") {
        data.push(size);
        }
    
    const onChangeAvailability = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setAvailability(value);
        setOpen(false);
    }
    if (availability !== "") {
        data.push(availability);
        }

    const onChangeCities = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setCities(value);
        setOpen(false);
    }
    if (cities !== "") {
        data.push(cities);
        }
    
    const showResults = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (data.length !== 0) {
            setOpen(true);
        }
    }
    const clearResults = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setCategory("");
        setGost("");
        setBrand("");
        setSize("");
        setAvailability("");
        setCities("");
        setOpen(false);
    }
    
    return{data, showResults, open, clearResults, onChangeCategory, category, onChangeGost, gost, onChangeBrand, brand, onChangeSize, size, onChangeAvailability, availability, onChangeCities, cities}
    }