import { ClearApplyData } from "./ClearApplyData"

export const Filters = () => {
    const {data, showResults, open, clearResults, onChangeCategory, category, onChangeGost, gost, onChangeBrand, brand, onChangeSize, size, onChangeAvailability, availability, onChangeCities, cities} = ClearApplyData();
    
    return(
        <div className="container">
            <div className="containerHeader">
                <div className="containerText">
                    <img className="iconSearch" src="../images/iconSearch.svg" alt="иконка поиска" />
                    <span className="searchText">Нашли {open && data.length || "0"} единиц по запросу</span>
                </div>
                <div className="title">Листовой металл</div>
            </div>
            <div className="containerFilters">
                <div className="image">
                    <img className="FadersHorizontal" src="../images/FadersHorizontal.svg" alt="картинка фильтра" />
                </div>
                <div className="filters">
                    <div className="filtersUp">
                        <select onChange={onChangeCategory} value={category}>
                            <option value={"Категория"}>Категория</option>
                            <option value={"Арматура"}>Арматура</option>
                            <option value={"Балка"}>Балка</option>
                            <option value={"Баллоны"}>Баллоны</option>
                            <option value={"Дробь"}>Дробь</option>
                            <option value={"Задвижки"}>Задвижки</option>
                            <option value={"Заглушки"}>Заглушки</option>
                            <option value={"Заготовки"}>Заготовки</option>
                            <option value={"Катанка"}>Катанка</option>
                            <option value={"Канаты стальные"}>Канаты стальные</option>
                            <option value={"Квадрат"}>Квадрат</option>
                            <option value={"Краны шаровые"}>Краны шаровые</option>
                            <option value={"Крепеж"}>Крепеж</option>
                            <option value={"Круг"}>Круг</option>
                            <option value={"Лента и штрипс"}>Лента и штрипс</option>
                            <option value={"Лист"}>Лист</option>
                            <option value={"МВСП"}>МВСП</option>
                            <option value={"Металлочерепица"}>Металлочерепица</option>
                            <option value={"Отводы"}>Отводы</option>
                            <option value={"Переходы"}>Переходы</option>
                            <option value={"Плита"}>Плита</option>
                            <option value={"Поковка"}>Поковка</option>
                            <option value={"Полособульб"}>Полособульб</option>
                            <option value={"Полоса"}>Полоса</option>
                            <option value={"Порошки и пудра"}>Порошки и пудра</option>
                            <option value={"Проволока"}>Проволока</option>
                            <option value={"Профиль"}>Профиль</option>
                            <option value={"Профнастил"}>Профнастил</option>
                            <option value={"Рельсы"}>Рельсы</option>
                            <option value={"Рулоны"}>Рулоны</option>
                            <option value={"Сварочное оборудование"}>Сварочное оборудование</option>
                            <option value={"Сетка"}>Сетка</option>
                            <option value={"Слитки"}>Слитки</option>
                            <option value={"Сэндвич-панели"}>Сэндвич-панели</option>
                            <option value={"Тройники"}>Тройники</option>
                            <option value={"Труба"}>Труба</option>
                            <option value={"Уголок"}>Уголок</option>
                            <option value={"Фланцы"}>Фланцы</option>
                            <option value={"Чушки"}>Чушки</option>
                            <option value={"Швеллер"}>Швеллер</option>
                            <option value={"Шестигранник"}>Шестигранник</option>
                            <option value={"Шина"}>Шина</option>
                            <option value={"Шпунт"}>Шпунт</option>
                            <option value={"Электроды"}>Электроды</option>
                        </select>
                        <select onChange={onChangeGost} value={gost}>
                            <option value={"ГОСТ"}>ГОСТ</option>
                            <option value={"Любой"}>Любой</option>
                            <option value={"API 5L"}>API 5L</option>
                            <option value={"ASTM A210"}>ASTM A210</option>
                            <option value={"ASTM A213"}>ASTM A213</option>
                            <option value={"ASTM A312"}>ASTM A312</option>
                            <option value={"ASTM A333"}>ASTM A333</option>
                            <option value={"ГОСТ 2.124-2014"}>ГОСТ 2.124-2014</option>
                            <option value={"ГОСТ 380"}>ГОСТ 380</option>
                            <option value={"ГОСТ 494"}>ГОСТ 494</option>
                            <option value={"ГОСТ 550"}>ГОСТ 550</option>
                            <option value={"ТУ 14-3Р-47-2001"}>ТУ 14-3Р-47-2001</option>
                            <option value={"ТУ 14-3Р-50-2001"}>ТУ 14-3Р-50-2001</option>
                            <option value={"ТУ 14-3Р-51-2001"}>ТУ 14-3Р-51-2001</option>
                            <option value={"ТУ 14-3Р-54-01"}>ТУ 14-3Р-54-01</option>
                            <option value={"ТУ 14-3Р-55-2001"}>ТУ 14-3Р-55-2001</option>
                            <option value={"ТУ 14-3Р-57-2001"}>ТУ 14-3Р-57-2001</option>
                            <option value={"ТУ 14-3Р-62-2002"}>ТУ 14-3Р-62-2002</option>
                            <option value={"ТУ 14-3Р-77-2004"}>ТУ 14-3Р-77-2004</option>
                            <option value={"ТУ 14-3Р-82-2005"}>ТУ 14-3Р-82-2005</option>
                            <option value={"ТУ 14-3Р-91-2004"}>ТУ 14-3Р-91-2004</option>
                            <option value={"ТУ 14-3Р-96-2007"}>ТУ 14-3Р-96-2007</option>
                            <option value={"ТУ 14-3Р-124-2012"}>ТУ 14-3Р-124-2012</option>
                            <option value={"ТУ 14-3Р-125-2012"}>ТУ 14-3Р-125-2012</option>
                            <option value={"ТУ 14-3Р-137-2015"}>ТУ 14-3Р-137-2015</option>
                            <option value={"ТУ 14-3Р-157-2018"}>ТУ 14-3Р-157-2018</option>
                            <option value={"ТУ 14-3Р-163-2019"}>ТУ 14-3Р-163-2019</option>
                        </select>
                        <select onChange={onChangeBrand} value={brand}>
                            <option value={"Марка"}>Марка</option>
                            <option value={"Любая"}>Любая</option>
                            <option value={"000Х18Н11"}>000Х18Н11</option>
                            <option value={"0Х18Н12Б"}>0Х18Н12Б</option>
                            <option value={"08КП"}>08КП</option>
                            <option value={"08ПС"}>08ПС</option>
                            <option value={"08ПС-5"}>08ПС-5</option>
                            <option value={"08ПС6"}>08ПС6</option>
                            <option value={"08СП"}>08СП</option>
                            <option value={"12Г2С-1"}>12Г2С-1</option>
                            <option value={"12Г2СБ"}>12Г2СБ</option>
                            <option value={"12Г2СД-1"}>12Г2СД-1</option>
                            <option value={"12ФА"}>12ФА</option>
                            <option value={"12Х1"}>12Х1</option>
                            <option value={"12Х1М"}>12Х1М</option>
                            <option value={"12Х1М1Ф"}>12Х1М1Ф</option>
                            <option value={"12Х1МС"}>12Х1МС</option>
                            <option value={"12Х1МФ"}>12Х1МФ</option>
                            <option value={"12Х1МФ"}>12Х1МФ-ПВ</option>
                            <option value={"12Х2М"}>12Х2М</option>
                            <option value={"12Х2Н4А"}>12Х2Н4А</option>
                            <option value={"12Х2НВФА"}>12Х2НВФА</option>
                            <option value={"12Х3ГНМФБА"}>12Х3ГНМФБА</option>
                            <option value={"12Х5МА"}>12Х5МА</option>
                            <option value={"12Х8ВФ"}>12Х8ВФ</option>
                            <option value={"12Х13"}>12Х13</option>
                            <option value={"12Х13Г12БС2Н2Д2"}>12Х13Г12БС2Н2Д2</option>
                            <option value={"12Х15Г9НД"}>12Х15Г9НД</option>
                            <option value={"12Х17"}>12Х17</option>
                            <option value={"12Х17Г9АН4"}>12Х17Г9АН4</option>
                            <option value={"12Х17Т"}>12Х17Т</option>
                            <option value={"12Х18Н9"}>12Х18Н9</option>
                            <option value={"12Х18Н10"}>12Х18Н10</option>
                            <option value={"12Х18Н10Т"}>12Х18Н10Т</option>
                            <option value={"12Х18Н10Т-ВД"}>12Х18Н10Т-ВД</option>
                            <option value={"12Х18Н12Т"}>12Х18Н12Т</option>
                            <option value={"12Х20Н76Т"}>12Х20Н76Т</option>
                            <option value={"12"}>12</option>
                            <option value={"38ХГНМ"}>38ХГНМ</option>
                            <option value={"38ХМ"}>38ХМ</option>
                        </select>
                    </div>
                    <div className="filtersDown">
                        <select onChange={onChangeSize} value={size}>
                            <option value={"Размер"}>Размер</option>
                            <option value={"Любой"}>Любой</option>
                            <option value={"0,3"}>0,3</option>
                            <option value={"0,32"}>0,32</option>
                            <option value={"0,36"}>0,36</option>
                            <option value={"0,4"}>0,4</option>
                            <option value={"0,45"}>0,45</option>
                            <option value={"3,1"}>3,1</option>
                            <option value={"3,2"}>3,2</option>
                            <option value={"3,3"}>3,3</option>
                            <option value={"3,4"}>3,4</option>
                            <option value={"3,5"}>3,5</option>
                            <option value={"3,6"}>3,6</option>
                            <option value={"3,7"}>3,7</option>
                            <option value={"3,8"}>3,8</option>
                            <option value={"4,76"}>4,76</option>
                            <option value={"4,8"}>4,8</option>
                            <option value={"4,9"}>4,9</option>
                            <option value={"5"}>5</option>
                            <option value={"5,2"}>5,2</option>
                            <option value={"5,3"}>5,3</option>
                            <option value={"5,4"}>5,4</option>
                            <option value={"5,5"}>5,5</option>
                            <option value={"5,6"}>5,6</option>
                            <option value={"5,8"}>5,8</option>
                            <option value={"6"}>6</option>
                            <option value={"6x6"}>6x6</option>
                            <option value={"6,1"}>6,1</option>
                            <option value={"6,2"}>6,2</option>
                            <option value={"6,25"}>6,25</option>
                            <option value={"6,35"}>6,35</option>
                            <option value={"6,4"}>6,4</option>
                            <option value={"9,53"}>9,53</option>
                        </select>
                        <select onChange={onChangeAvailability} value={availability}>
                            <option value={"Наличие"}>Наличие</option>
                            <option value={"Все"}>Все</option>
                            <option value={"В наличии"}>В наличии</option>
                            <option value={"Под заказ"}>Под заказ</option>
                        </select>
                        <select onChange={onChangeCities} value={cities}>
                            <option value={"Город"}>Город</option>
                            <option value={"Все города"}>Все города</option>
                            <option value={"Москва"}>Москва</option>
                            <option value={"Санкт-Петербург"}>Санкт-Петербург</option>
                            <option value={"Уфа"}>Уфа</option>
                            <option value={"Казань"}>Казань</option>
                            <option value={"Нижний Новгород"}>Нижний Новгород</option>
                            <option value={"Ростов-на-Дону"}>Ростов-на-Дону</option>
                            <option value={"Челябинск"}>Челябинск</option>
                        </select>
                    </div>
                    <div className="buttons">
                        <button className="clear" onClick={clearResults}>Очистить фильтры</button>
                        <button className="apply" onClick={showResults}>Применить фильтры</button>
                    </div>
                </div>
            </div>
                    <div className="results">{open && data?.map((elem: string, id: number) => {return <p key={id}>{elem}</p>;})}</div>
        </div>
    )
}