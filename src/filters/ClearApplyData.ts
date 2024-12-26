import { useState } from "react"
// import { Filters } from "react";
// import { CustomSelect } from "./components/CustomSelect";
    
    export const useClearApplyData = () => {
        interface SelectOption {
            title: string;
          }

        const [category, setCategory] = useState<string>("");
        const [gost, setGost] = useState<string>("");
        const [brand, setBrand] = useState<string>("");
        const [size, setSize] = useState<string>("");
        const [availability, setAvailability] = useState<string>("");
        const [cities, setCities] = useState<string>("");
        const [open, setOpen] = useState<boolean>(false);
        // const [show, setShow] = useState<boolean>(false);
        const [selected, setSelected] = useState<SelectOption | null>(null);
        const [isOpen, setIsOpen] = useState<boolean>(false);
        let optionCategory: Array<string> = ["Категория", "Арматура", "Балка", "Баллоны", "Дробь", "Задвижки", "Заглушки", "Заготовки", "Катанка", 
        "Канаты стальные", "Квадрат", "Краны шаровые", "Крепеж", "Круг", "Лента и штрипс", "Лист", "МВСП", "Металлочерепица", "Отводы", 
        "Переходы", "Плита", "Поковка", "Полособульб", "Полоса", "Порошки и пудра", "Проволока", "Профиль", "Профнастил", "Рельсы", "Рулоны", 
        "Сварочное оборудование", "Сетка", "Слитки", "Сэндвич-панели", "Тройники", "Труба", "Уголок", "Фланцы", "Чушки", "Швеллер", 
        "Шестигранник", "Шина", "Шпунт", "Электроды"];

        let optionGost: Array<string> = ["ГОСТ", "Любой", "API 5L", "ASTM A210", "ASTM A213", "ASTM A312", "ASTM A333", "ГОСТ 2.124-2014", 
        "ГОСТ 380", "ГОСТ 494", "ГОСТ 550", "ТУ 14-3Р-47-2001", "ТУ 14-3Р-50-2001", "ТУ 14-3Р-51-2001", "ТУ 14-3Р-54-01", "ТУ 14-3Р-55-2001", 
        "ТУ 14-3Р-57-2001", "ТУ 14-3Р-62-2002", "ТУ 14-3Р-77-2004", "ТУ 14-3Р-82-2005", "ТУ 14-3Р-91-2004", "ТУ 14-3Р-96-2007", 
        "ТУ 14-3Р-124-2012", "ТУ 14-3Р-125-2012", "ТУ 14-3Р-137-2015", "ТУ 14-3Р-157-2018", "ТУ 14-3Р-163-2019"];

        let optionBrand: Array<string> = ["Марка", "Любая", "000Х18Н11", "0Х18Н12Б", "08КП", "08ПС", "08ПС-5", "08ПС6", "08СП", "12Г2С-1", 
        "12Г2СБ", "12Г2СД-1", "12ФА", "12Х1", "12Х1М", "12Х1М1Ф", "12Х1МС", "12Х1МФ", "12Х1МФ-ПВ", "12Х2М", "12Х2Н4А", "12Х2НВФА", "12Х3ГНМФБА", 
        "12Х5МА", "12Х8ВФ", "12Х13", "12Х13Г12БС2Н2Д2", "12Х15Г9НД", "12Х17", "12Х17Г9АН4", "12Х17Т", "12Х18Н9", "12Х18Н10", "12Х18Н10Т", 
        "12Х18Н10Т-ВД", "12Х18Н12Т", "12Х20Н76Т", "12", "38ХГНМ", "38ХМ"];

        let optionSize: Array<string> = ["Размер", "Любой", "0,3", "0,32", "0,36", "0,4", "0,45", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", 
        "3,8", "4,76", "4,8", "4,9", "5", "5,2", "5,3", "5,4", "5,5", "5,6", "5,8", "6", "6x6", "6,1", "6,2", "6,25", "6,35", "6,4", "9,53"];
    
        let optionAvailability: Array<string> = ["Наличие", "Все", "В наличии", "Под заказ"];

        let optionCities: Array<string> = ["Город", "Все города", "Москва", "Санкт-Петербург", "Уфа", "Казань", "Нижний Новгород", 
            "Ростов-на-Дону", "Челябинск"];

        let data: Array<string> = [];

            function onChangeCategory (e: React.ChangeEvent<HTMLSelectElement>) {   
                    const { value } = e?.currentTarget;
                    setCategory(value);
                    setOpen(false);
                    setIsOpen(true);
                }   
                    if (category !== "") {
                        data.push(category);
                    }
            function onChangeGost (e: React.ChangeEvent<HTMLSelectElement>) {   
                    const { value } = e?.target;
                    setGost(value);
                    setOpen(false);
                } 
                    if (gost !== "") {
                        data.push(gost);
                    }
            function onChangeBrand (e: React.ChangeEvent<HTMLSelectElement>) {   
                    const { value } = e?.target;
                    setBrand(value);
                    setOpen(false);
                }
                    if (brand !== "") {
                        data.push(brand);
                    }
            function onChangeSize (e: React.ChangeEvent<HTMLSelectElement>) {   
                    const { value } = e?.target;
                    setSize(value);
                    setOpen(false);
                }
                    if (size !== "") {
                        data.push(size);
                    }
            function onChangeAvailability (e: React.ChangeEvent<HTMLSelectElement>) {   
                    const { value } = e?.target;
                    setAvailability(value);
                    setOpen(false);
                }
                    if (availability !== "") {
                        data.push(availability);
                    }
            function onChangeCities (e: React.ChangeEvent<HTMLSelectElement>) {   
                    const { value } = e?.target;
                    setCities(value);
                    setOpen(false);
                }
                    if (cities !== "") {
                        data.push(cities);
                    }
            function clearResults (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {   
                    e.preventDefault();
                    // setSelected(null);
                    setCategory("");
                    setGost("");
                    setBrand("");
                    setSize("");
                    setAvailability("");
                    setCities("");
                    setOpen(false);
                    // setShow(true);
            }
            function showResults (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {   
                    e.preventDefault();
                    if (data.length !== 0) {
                        setOpen(true);
                    }
            }
            
    let func: Array<any> = [onChangeCategory, onChangeGost, onChangeBrand, onChangeSize, onChangeAvailability, onChangeCities, clearResults, showResults];
    
    let variables: Array<any> = [optionCategory, optionGost, optionBrand, optionSize, optionAvailability, optionCities, data, category, gost, brand, size, availability, cities, open, isOpen];

    return{ variables, func, selected, setSelected };
    }