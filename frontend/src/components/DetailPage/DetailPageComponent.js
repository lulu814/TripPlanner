import React, {useEffect, useState} from "react";

export default function DetailPlace({ match }){
    const[placeDetail, setPlaceDetail] = useState({name: ''});

    const fetchPlaceDetail = () => {
        console.log(`getting id ${match.params.placeId}`)
        return fetch(`/api/place/${match.params.placeId}`)
            .then(response => response.json())
            .then(placeDetailResult => {
                return placeDetailResult.result;
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const fetchData = async() => setPlaceDetail(await fetchPlaceDetail());
        fetchData();
    }, [])

    return(
        <div>
            <h1>{placeDetail.name}</h1>
        </div>
    )

}