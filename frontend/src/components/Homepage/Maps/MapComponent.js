import React from "react";
import { FaCompass} from 'react-icons/fa';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import CardComponent from "./CardComponent";
import Search from "./SearchBarComponent";

// to avoid rerender
const libraries = ["places", "geometry", "drawing"];
const mapContainerStyle = {
    height: "100vh",
    width: "100%",
    top: 50

};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 34.052235,
    lng: -118.243683,
};

let places = [
    {latitude: 27.9947147,longitude: -82.5943645},
    {latitude: 28.4813018,longitude: -81.4387899},
    {latitude: 29.4813018,longitude: -81.4387899}];

export default  function MapComponent() {
    // if the google script is ready
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:"AIzaSyBlHhL9EqgJx0ZFIuzc5vn2yUAe96pZhs8",
        // googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
        places.push( {lat: e.latLng.lat(), lng: e.latLng.lng() } );
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>
            <div className="mapContainer d-none d-md-block">
                {/* <Locate panTo={panTo} /> */}
                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}
                    onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                    {markers.map((marker) => (
                        <Marker
                            key={`${marker.lat}-${marker.lng}`}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            onClick={() => {
                                setSelected(marker);
                            }}

                        />
                    ))}
                    {selected ? (
                        <InfoWindow
                            position={{ lat: selected.lat, lng: selected.lng }}
                            onCloseClick={() => {
                                setSelected(null);
                            }}
                        >
                            <div style={{ width: "18rem" }}>
                                <CardComponent placeId = {selected.placeId} />
                                <h5>{selected.address}</h5>
                            </div>
                        </InfoWindow>
                    ) : null}
                    <Search panTo={panTo} setMarkers = {setMarkers}/>
                    <button
                        className="locate"
                        onClick={() => {
                            navigator.geolocation.getCurrentPosition(
                                (position) => {
                                    panTo({
                                        lat: position.coords.latitude,
                                        lng: position.coords.longitude,
                                    });
                                },
                                () => null
                            );
                        }}
                    >
                        <FaCompass size={40}/>
                    </button>
          
                </GoogleMap>
            </div>

        </div>

    );
}


