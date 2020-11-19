import React from "react";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";

export default function SearchBar({panTo, setMarkers}) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 34.052235, lng: () =>  -118.243683 },
            radius: 100 * 1000,
        },
    });
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            const placeId = results[0].place_id
            panTo({ lat, lng });
            setMarkers((current) => [
                ...current,
                {
                    lat,
                    lng,
                    time: new Date(),
                    placeId,
                    address : results[0].formatted_address
                },
            ]);
           // places.push( {lat, lng } );

        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return(
        <div className='search-section'>
            <div id="cover">
                <div className="tb search-tb">
                    <div className="td search-td">
                        <Combobox onSelect={handleSelect}>
                            <ComboboxInput
                                value={value}
                                onChange={handleInput}
                                disabled={!ready}
                                placeholder="Where to?"
                                className='combo-input combo-searchbox'
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
                    <div className="td search-td" id="s-cover">
                        <button onClick={handleInput} className="search-button">
                            <div id="s-circle"></div>
                            <span className="search-span-stick"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
