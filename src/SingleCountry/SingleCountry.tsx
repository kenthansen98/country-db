import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";
import { Country } from "../types/CountryTypes";
import Borders from "./Borders";
import LanguageSelector from "./LanguageSelector";
import { Wrapper, ContentWrapper, InnerWrapper } from "./SingleCountry.styles";
import SingleCountryTable from "./SingleCountryTable";
import Map from "./Map";

type CountryParam = {
    code: string;
}

const getSingleCountry = async (code: string): Promise<Country> =>
    await (await fetch(`https://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`)).json();

const SingleCountry = () => {
    const { code } = useParams<CountryParam>();
    const { data, isLoading, error } = useQuery<Country>(['country', code], () => getSingleCountry(code));
    const [language, setLanguage] = useState("en");
    const history = useHistory();

    if (isLoading) {
        return (
            <div style={{ height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }
    if (error) {
        return <div>Something went wrong...</div>;
    }
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLanguage(event.target.value as string);
    };

    const handleClick = (country: string) => {
        history.push(`/${country}`);
    };

    console.log(data);

    return (
        <Wrapper>
            {language === "en"
                ? <h2>{data?.name}</h2>
                : <h2>{data?.translations[language]}</h2>
            }
            <LanguageSelector language={language} handleChange={handleChange} />
            <img src={data?.flag} alt={`Flag of ${data?.name}`} />
            <ContentWrapper>
                <SingleCountryTable data={data} />
                <InnerWrapper>
                    <Borders data={data} handleClick={handleClick} />
                    <Map data={data}/>
                </InnerWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};

export default SingleCountry;