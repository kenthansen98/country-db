import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";

interface Props {
    language: string;
    handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const LanguageSelector: React.FC<Props> = ({ language, handleChange }) => {
    return (
        <FormControl className="select" variant="filled">
            <InputLabel>Language</InputLabel>
            <Select
                value={language}
                onChange={handleChange}
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="de">German</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
                <MenuItem value="fa">Farsi</MenuItem>
                <MenuItem value="fr">French</MenuItem>
                <MenuItem value="hr">Croatian</MenuItem>
                <MenuItem value="it">Italian</MenuItem>
                <MenuItem value="ja">Japanese</MenuItem>
                <MenuItem value="nl">Dutch</MenuItem>
                <MenuItem value="pt">Portuguese</MenuItem>
            </Select>
            <FormHelperText>See country name in...</FormHelperText>
        </FormControl>
    );
};

export default LanguageSelector;