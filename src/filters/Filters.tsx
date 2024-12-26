import { useClearApplyData } from "./ClearApplyData"
import { CustomSelectData } from "./components/CustomSelectData";
// import { useState } from "react";
import category from "./dataOptions/category.json";
import gost from "./dataOptions/gost.json";
import brand from "./dataOptions/brand.json";
import size from "./dataOptions/size.json";
import availability from "./dataOptions/availability.json";
import cities from "./dataOptions/cities.json";

export const Filters = () => {
    const { variables, func } = useClearApplyData();
    // const [month, setMonthValue] = useState("");
    // const handleMonthSelect = (value: string) => {
    //   setMonthValue(value);
    // };
    // const selectedMonth = category.find((item) => item.value === month);
    // console.log(variables[7]);
    
    return(
        <div className="container">
            <div className="containerHeader">
                <div className="containerText">
                    <img className="iconSearch" src="../images/iconSearch.svg" alt="иконка поиска" />
                    <span className="searchText">Нашли {variables[13] && variables[6].length || "0"} единиц по запросу</span>
                </div>
                <div className="title">Листовой металл</div>
            </div>
            <div className="containerFilters">
                <div className="image">
                    <img className="FadersHorizontal" src="../images/FadersHorizontal.svg" alt="картинка фильтра" />
                </div>
                <div className="filters">
                    <div className="filtersUp">
                    {/* <CustomSelectData options={category} placeholder="Категория" />
                    <CustomSelectData options={gost} placeholder="ГОСТ" />
                    <CustomSelectData options={brand} placeholder="Марка" /> */}
                        <select onChange={func[0]} value={variables[7]}>
                            {variables[0].map((elem: string, id: number) => {return <option key={id}>{elem}</option>;})}
                        </select>
                        <select onChange={func[1]} value={variables[8]}>
                            {variables[1].map((elem: string, id: number) => {return <option key={id}>{elem}</option>;})}
                        </select>
                        <select onChange={func[2]} value={variables[9]}>
                            {variables[2].map((elem: string, id: number) => {return <option key={id}>{elem}</option>;})}
                        </select>
                    </div>
                <div className="filtersDown">
                    {/* <CustomSelectData options={size} placeholder="Размер" />
                    <CustomSelectData options={availability} placeholder="Наличие" />
                    <CustomSelectData options={cities} placeholder="Город" /> */}
                        <select onChange={func[3]} value={variables[10]}>
                            {variables[3].map((elem: string, id: number) => {return <option key={id}>{elem}</option>;})}
                        </select>
                        <select onChange={func[4]} value={variables[11]}>
                            {variables[4].map((elem: string, id: number) => {return <option key={id}>{elem}</option>;})}
                        </select>
                        <select onChange={func[5]} value={variables[12]}>
                            {variables[5].map((elem: string, id: number) => {return <option key={id}>{elem}</option>;})}
                        </select>
                </div>
                    <div className="buttons">
                        <button className="clear" type="button" onClick={func[6]}>Очистить фильтры</button>
                        <button className="apply" type="button" onClick={func[7]}>Применить фильтры</button>
                    </div>
                </div>
            </div>
                    <div className="results">{variables[13] && variables[6]?.map((elem: string, id: number) => {return <p key={id}>{elem}</p>;})}</div>
        </div>
    )
}