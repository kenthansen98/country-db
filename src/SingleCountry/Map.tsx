import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface Props {
    latlng: number[] | undefined;
};

const Map: React.FC<Props> = ({ latlng }) => {
    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: latlng ? latlng[0] : 0,
        lng: latlng ? latlng[1] : 0
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    });

    return latlng && isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
        />
    ) : null;
};

export default Map;