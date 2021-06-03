import { Route, Switch } from "react-router";
import AllCountries from "./AllCountries/AllCountries";
import SingleCountry from "./SingleCountry/SingleCountry";

const Main = () => (
    <Switch>
        <Route path="/:code" component={SingleCountry} />
        <Route path="/" component={AllCountries}/>
    </Switch>
);

export default Main;