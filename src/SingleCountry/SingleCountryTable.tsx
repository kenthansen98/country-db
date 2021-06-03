import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@material-ui/core";
import { Country } from "../types/CountryTypes";

interface Props {
    data: Country | undefined;
}

const SingleCountryTable: React.FC<Props> = ({ data }) => {
    return (
        <TableContainer className="table" component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Attribute</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Country Code</TableCell>
                        <TableCell align="right">{data?.alpha3Code}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Area</TableCell>
                        <TableCell align="right">{data?.area?.toLocaleString('en-US')} km<sup>2</sup></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Capital</TableCell>
                        <TableCell align="right">{data?.capital}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Currency</TableCell>
                        <TableCell align="right">{data?.currencies[0].name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Demonym</TableCell>
                        <TableCell align="right">{data?.demonym}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Gini Coefficient</TableCell>
                        <TableCell align="right">{data?.gini}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Languages</TableCell>
                        <TableCell align="right">{data?.languages?.slice(0, -1).map(l => `${l.name}, `)} {data?.languages?.slice(-1)[0].name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Native Name</TableCell>
                        <TableCell align="right">{data?.nativeName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Population</TableCell>
                        <TableCell align="right">{data?.population?.toLocaleString('en-US')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Region</TableCell>
                        <TableCell align="right">{data?.region}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Subregion</TableCell>
                        <TableCell align="right">{data?.subregion}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Regional Blocs</TableCell>
                        <TableCell align="right">{data?.regionalBlocs?.slice(0, -1).map(rb => `${rb.name}, `)} {data?.regionalBlocs?.slice(-1)[0]?.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Top-level Domain</TableCell>
                        <TableCell align="right">{data?.topLevelDomain[0]}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default SingleCountryTable;