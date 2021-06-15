import { Button, ButtonGroup, Paper } from "@material-ui/core";

interface Props {
    borders: string[] | undefined;
    handleClick: (country: string) => void;
}

const Borders: React.FC<Props> = ({ borders, handleClick }) => {
    return (
        <Paper className="borders">
            <h3>Bordering countries</h3>
            <ButtonGroup color="primary" variant="contained" className="buttons">
                {borders?.slice(0, 5).map((country, i) => (
                    <Button key={i} onClick={() => handleClick(country)}>{country}</Button>
                ))}
            </ButtonGroup>
            {borders && borders.length > 5 &&
                <ButtonGroup color="primary" variant="contained" className="buttons">
                    {borders.slice(5, 10).map((country, i) => (
                        <Button key={i} onClick={() => handleClick(country)}>{country}</Button>
                    ))}
                </ButtonGroup>
            }
            {borders && borders.length > 10 &&
                <ButtonGroup color="primary" variant="contained" className="buttons">
                    {borders.slice(10).map((country, i) => (
                        <Button key={i} onClick={() => handleClick(country)}>{country}</Button>
                    ))}
                </ButtonGroup>
            }
        </Paper>
    );
};

export default Borders;