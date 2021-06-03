import { CircularProgress, TextField } from "@material-ui/core";
import { useState } from "react";
import { useQuery } from "react-query";
import { Country } from "../types/CountryTypes";
import { Wrapper } from "./AllCountries.styles";
import AllCountriesList from "./AllCountriesList";

const getAllCountries = async (): Promise<Country[]> =>
    await (await fetch("https://restcountries.eu/rest/v2/all")).json();

const AllCountries = () => {
    const [search, setSearch] = useState("");

    const { data, isLoading, error } = useQuery<Country[]>('countries', getAllCountries);

    return (
        <Wrapper>
            {isLoading ? <CircularProgress /> : null}
            {error ? <div>Something went wrong...</div> : null}
            <TextField className="input" variant="filled" label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <AllCountriesList data={data?.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))} />
        </Wrapper>
    );
};

export default AllCountries;