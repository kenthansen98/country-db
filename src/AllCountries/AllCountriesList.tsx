import { Button, Card, CardActions, CardHeader, CardMedia, Grid } from "@material-ui/core";
import { useHistory } from "react-router";

import { Country } from "../types/CountryTypes";

interface Props {
    data: Country[] | undefined;
}

const AllCountriesList: React.FC<Props> = ({ data }) => {
    const history = useHistory();
    const onClick = (country: Country) => {
        history.push(`/${country.alpha3Code}`);
    };

    return (
        <Grid container spacing={6}>
            {data?.length !== 2
                ? data?.map((country, i) => (
                    <Grid item xs={12} sm={8} md={4} key={i} >
                        <Card className="card">
                            <CardHeader title={country.name} subheader={`Population: ${country.population.toLocaleString('en-US')}`} />
                            <CardMedia className="media" image={country.flag} title={`${country.name} flag`} />
                            <CardActions>
                                <Button color="primary" onClick={() => onClick(country)}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
                : data?.map((country, i) => (
                    <Card className="card2" key={i}>
                        <CardHeader title={country.name} subheader={`Population: ${country.population.toLocaleString('en-US')}`} />
                        <CardMedia className="media" image={country.flag} title={`${country.name} flag`} />
                        <CardActions>
                            <Button color="primary" onClick={() => onClick(country)}>Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
        </Grid>
    );
};

export default AllCountriesList;