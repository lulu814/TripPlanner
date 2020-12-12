import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaMapMarkedAlt, FaBook, FaPhone } from 'react-icons/fa';

const photo_url = (ref) => 
`https://maps.googleapis.com/maps/api/place/photo?photoreference=${ref}&key=AIzaSyBlHhL9EqgJx0ZFIuzc5vn2yUAe96pZhs8&maxheight=300&maxwidth=300`;

export default function DetailPlace(){
    const[placeDetail, setPlaceDetail] = useState({});
    let params = useParams();

    const fetchPlaceDetail = () => {
        return fetch(`/api/place/${params.placeId}`)
            .then(response => response.json())
            .then(placeDetailResult => {
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
            <section className="section-medium bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-white text-center">
                            <h2 className="section-title "> {placeDetail.name} </h2>
                        </div>
                    </div>
                </div>
            </section>
           
        
            {/* address info under place name title */}
            <div className="container bootstrap snippets bootdeys">
                <div className="row text-center">
                    <div className="col-sm-4">
                        <div className="contact-detail-box">
                            <FaPhone size={50} color="#f16000"/>
                            <h4>Phone</h4>
                            <p>{placeDetail.formatted_phone_number}</p>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="contact-detail-box">
                            <FaMapMarkedAlt size={50} color="#f16000"/>
                            <h4>Location</h4>
                            <p>
                                {placeDetail.formatted_address} 
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="contact-detail-box">
                            <FaBook size={50} color="#f16000"/>    
                            <h4>Website</h4>
                            <p className="p-website">
                                {placeDetail.website}
                            </p>
                        </div>
                    </div>
                </div>
            </div>    

            {/* photos */}
            {
                placeDetail.photos &&
                <div className="container">
                    <div className="row form-row align-items-center">
                        <div className="col-3">
                            <div className="img-square">
                            <img src={photo_url(placeDetail.photos[0].photo_reference)} alt="..." className="img-cover"/>
                            </div> 
                        </div>
                    <div className="col-6">
                        <div className="row form-row align-items-end mb-2">
                            <div className="col-7">
                                <div className="img-square">
                                <img src={photo_url(placeDetail.photos[1].photo_reference)} alt="..." className="img-cover"/>
                                </div>
                            </div>
                        <div className="col-5">
                            <div className="img-square">
                            <img src={photo_url(placeDetail.photos[2].photo_reference)} alt="..." className="img-cover"/>
                            </div>
                        </div>
                        </div> 
                        <div className="row form-row">
                        <div className="col-5">
                            <div className="img-square">
                            <img src={photo_url(placeDetail.photos[3].photo_reference)} alt="..." className="img-cover"/>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="img-square">
                            <img src={photo_url(placeDetail.photos[4].photo_reference)} alt="..." className="img-cover"/>
                            </div>
                        </div>
                        </div> 
                    </div>
                    <div className="col-3">
                        <div className="img-square">
                        <img src={photo_url(placeDetail.photos[5].photo_reference)} alt="..." className="img-cover"/>
                        </div>
                    </div>
                    </div>
                </div>
            }

            {/* review */}
            <div classNameName = 'PlaceName'>
                <h4>Reviews</h4>
            </div>
            <div className="row">
                {placeDetail.reviews && placeDetail.reviews.map(review => 
                    <div key={review.author_name} className="col-md-12">
                        <div className="media g-mb-30 media-comment">
                            <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src={review.profile_photo_url} alt=""/>
                            <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                            <div className="g-mb-15">
                                <h5 className="h6 g-color-gray-dark-v1 mb-0">{review.author_name}</h5>
                                <span className="g-color-gray-dark-v4 g-font-size-12">{review.relative_time_description}</span>
                            </div>
                        
                            <p className = "g-font-size-12">{review.text}</p>
                        
                            <ul className="list-inline d-sm-flex my-0">
                                <li className="list-inline-item g-mr-20 g-font-size-12">
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
