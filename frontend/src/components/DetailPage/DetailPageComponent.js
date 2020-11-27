import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaMapMarkedAlt, FaBook, FaPhone } from 'react-icons/fa';

const photo_url = (ref) => 
`https://maps.googleapis.com/maps
/api/place/photo?photoreference=
${ref}&key=AIzaSyBlHhL9EqgJx0ZFIuzc5vn2yUAe96pZhs8&maxheight=300&maxwidth=300`;

export default function DetailPlace(){
    const[placeDetail, setPlaceDetail] = useState({});
    let params = useParams();

    const fetchPlaceDetail = () => {
        console.log(`getting id ${params.placeId}`)
        return fetch(`/api/place/${params.placeId}`)
            .then(response => response.json())
            .then(placeDetailResult => {
                console.log(placeDetailResult.result)
                return placeDetailResult.result;
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const fetchData = async () => setPlaceDetail(await fetchPlaceDetail());
        fetchData();
    }, [])

    return(
        <Container>
             {/* place name title */}
            <section class="section-medium bg-color">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-white text-center">
                            <h2 class="section-title "> {placeDetail.name} </h2>
                        </div>
                    </div>
                </div>
            </section>
           
        
            {/* address info under place name title */}
            <div class="container bootstrap snippets bootdeys">
                <div class="row text-center">
                    <div class="col-sm-4">
                        <div class="contact-detail-box">
                            <FaPhone size={50} color="#f16000"/>
                            <h4>Phone</h4>
                            <p>{placeDetail.formatted_phone_number}</p>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="contact-detail-box">
                            <FaMapMarkedAlt size={50} color="#f16000"/>
                            <h4>Location</h4>
                            <address>
                                {placeDetail.formatted_address} 
                            </address>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="contact-detail-box">
                            <FaBook size={50} color="#f16000"/>    
                            <h4>Website</h4>
                            <p>{placeDetail.website}</p>
                        </div>
                    </div>
                </div>
            </div>    

            {/* photos */}
            {
                placeDetail.photos &&
                <div class="container">
                    <div class="row form-row align-items-center">
                        <div class="col-3">
                            <div class="img-square">
                            <img src={photo_url(placeDetail.photos[0].photo_reference)} alt="..." class="img-cover"/>
                            </div> 
                        </div>
                    <div class="col-6">
                        <div class="row form-row align-items-end mb-2">
                            <div class="col-7">
                                <div class="img-square">
                                <img src={photo_url(placeDetail.photos[1].photo_reference)} alt="..." class="img-cover"/>
                                </div>
                            </div>
                        <div class="col-5">
                            <div class="img-square">
                            <img src={photo_url(placeDetail.photos[2].photo_reference)} alt="..." class="img-cover"/>
                            </div>
                        </div>
                        </div> 
                        <div class="row form-row">
                        <div class="col-5">
                            <div class="img-square">
                            <img src={photo_url(placeDetail.photos[3].photo_reference)} alt="..." class="img-cover"/>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="img-square">
                            <img src={photo_url(placeDetail.photos[4].photo_reference)} alt="..." class="img-cover"/>
                            </div>
                        </div>
                        </div> 
                    </div>
                    <div class="col-3">
                        <div class="img-square">
                        <img src={photo_url(placeDetail.photos[5].photo_reference)} alt="..." class="img-cover"/>
                        </div>
                    </div>
                    </div>
                </div>
            }

            {/* review */}
            <div className = 'PlaceName'>
                <h4>Reviews</h4>
            </div>
            <div class="row">
                {placeDetail.reviews && placeDetail.reviews.map(review => 
                    <div class="col-md-12">
                        <div class="media g-mb-30 media-comment">
                            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src={review.profile_photo_url} alt="Image Description"/>
                            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                            <div class="g-mb-15">
                                <h5 class="h6 g-color-gray-dark-v1 mb-0">{review.author_name}</h5>
                                <span class="g-color-gray-dark-v4 g-font-size-12">{review.relative_time_description}</span>
                            </div>
                        
                            <p class = "g-font-size-12">{review.text}</p>
                        
                            <ul class="list-inline d-sm-flex my-0">
                                <li class="list-inline-item g-mr-20 g-font-size-12">
                                    Rating: {review.rating}
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>         
    </Container>
)

}