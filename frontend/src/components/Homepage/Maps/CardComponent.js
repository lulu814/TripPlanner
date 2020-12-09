/* global google */
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
const  CardComponent = ({placeId} ) => {
    const [photoUrl, setPhotoUrl ] = useState("");
    const [text, setText] = useState("Not Available");

    useEffect(() => {
        initialize();
    });

    const initialize = () => {
        const request = {
           placeId
        };
        let service = new google.maps.places.PlacesService(
            document.createElement("div")
        );
        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                if( place.photos != null && place.photos.length > 0 ) {
                    setPhotoUrl(place.photos[0].getUrl({maxWidth: 350, maxHeight: 350}));
                }
                if( place.reviews != null && place.reviews.length > 0 ) {
                    setText(place.reviews[0].text);
                }
            }
        });
    };

    return (
            <Card>
                <Card.Img variant="top" src={photoUrl} />
            </Card>
    );
};

export default CardComponent;
