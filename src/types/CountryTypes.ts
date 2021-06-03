export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
    languages: {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }[];
    translations: {
        [de: string]: string;
        "es": string;
        "fr": string;
        "fa": string;
        "ja": string;
        "it": string;
        "hr": string;
        "br": string;
        "nl": string;
        "pt": string;
    };
    flag: string;
    regionalBlocs: {
        acronym: string;
        name: string;
        otherAcronyms: string[];
        otherNames: string[];
    }[];
    cios: string;
};