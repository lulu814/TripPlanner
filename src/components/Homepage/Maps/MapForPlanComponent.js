/* global google */
import React, {useEffect, useState} from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
    DirectionsRenderer,
    DirectionsService
} from "@react-google-maps/api";


import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import "@reach/combobox/styles.css";

import CardComponent from "./CardComponent";
import MapDirectionsRenderer from "./MapDirectionComponent";
import SearchBar from "../SearchBarComponent";

import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";

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

// const MapComponent = withScriptjs(
//     withGoogleMap(props => (
//         <GoogleMap>
//             <MapDirectionsRenderer places={props.markers} travelMode="DRIVING" />
//         </GoogleMap>
//     ))
// );
//
// export default MapComponent;

export default  function MapForPlanComponent() {
    // if the google script is ready
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:"AIzaSyBlHhL9EqgJx0ZFIuzc5vn2yUAe96pZhs8",
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
            <div className="mapContainer">
                <Search2 panTo={panTo} />
                <Locate panTo={panTo} />
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
                    {/*<MapDirectionsRenderer*/}
                    {/*    places={[*/}
                    {/*        {latitude: 27.9947147,longitude: -82.5943645},*/}
                    {/*        {latitude: 28.4813018,longitude: -81.4387899},*/}
                    {/*        {latitude: 29.4813018,longitude: -81.4387899}]}*/}
                    {/*    travelMode="DRIVING"*/}
                    {/*/>*/}
                </GoogleMap>
            </div>

        </div>

    );
}

// get the current position
function Locate({ panTo }) {
    return (
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
            <img src="/compass.svg" alt="compass" />
        </button>
    );
}

function Search2({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.6532, lng: () => -79.3832 },
            radius: 100 * 1000,
        },
    });

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
    <div className="search2">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Search your location"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" &&
                        data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}
// function MapDirectionsRenderer(props) {
//     const [directions, setDirections] = useState(null);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const { places, travelMode } = props;
//
//         const waypoints = places.map(p => ({
//             location: { lat: p.latitude, lng: p.longitude },
//             stopover: true
//         }));
//         const origin = waypoints.shift().location;
//         const destination = waypoints.pop().location;
//
//         const directionsService = new google.maps.DirectionsService();
//         directionsService.route(
//             {
//                 origin: origin,
//                 destination: destination,
//                 travelMode: travelMode,
//                 waypoints: waypoints
//             },
//             (result, status) => {
//                 console.log(result)
//                 if (status === google.maps.DirectionsStatus.OK) {
//                     setDirections(result);
//                 } else {
//                     setError(result);
//                 }
//             }
//         );
//     });
//
//     if (error) {
//         return <h1>{error}</h1>;
//     }
//     return (
//         directions && (
//             <DirectionsRenderer directions={directions} />
//         )
//     );
// }


