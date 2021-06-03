import { Button, ButtonGroup, Paper } from "@material-ui/core";
import { Country } from "../types/CountryTypes";

interface Props {
    data: Country | undefined;
    handleClick: (country: string) => void;
}

const Borders: React.FC<Props> = ({ data, handleClick }) => {
    return (
        <Paper className="borders">
            <h3>Bordering countries</h3>
            <ButtonGroup color="primary" variant="contained" className="buttons">
                {data?.borders.slice(0, 5).map((country, i) => (
                    <Button key={i} onClick={() => handleClick(country)}>{country}</Button>
                ))}
            </ButtonGroup>
            {data?.borders && data.borders.length > 5 &&
                <ButtonGroup color="primary" variant="contained" className="buttons">
                    {data?.borders.slice(5, 10).map((country, i) => (
                        <Button key={i} onClick={() => handleClick(country)}>{country}</Button>
                    ))}
                </ButtonGroup>
            }
            {data?.borders && data.borders.length > 10 &&
                <ButtonGroup color="primary" variant="contained" className="buttons">
                    {data?.borders.slice(10).map((country, i) => (
                        <Button key={i} onClick={() => handleClick(country)}>{country}</Button>
                    ))}
                </ButtonGroup>
            }
        </Paper>
    );
};

export default Borders;