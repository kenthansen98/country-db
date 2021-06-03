import { Country } from "../types/CountryTypes";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface Props {
    data: Country | undefined;
};

const Map: React.FC<Props> = ({ data }) => {
    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: data?.latlng[0],
        lng: data?.latlng[1]
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API!,
    });

    return data && isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
        />
    ) : null;
};

export default Map;