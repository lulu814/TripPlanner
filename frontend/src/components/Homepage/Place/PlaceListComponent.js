import React, {useEffect, useState} from "react";
import { List } from 'antd';
import { Link, useParams } from "react-router-dom";

export default function PlaceList() {
  const [placeList, setPlaceList] = useState([]);
  let { searchText } = useParams();

  const photo_url = (ref) => 
  `https://maps.googleapis.com/maps/api/place/photo?photoreference=${ref}&key=AIzaSyBlHhL9EqgJx0ZFIuzc5vn2yUAe96pZhs8&maxheight=260&maxwidth=260`;
  
  const fetchPlaces = (searchText) => {
    return fetch(`/api/places?searchText=${encodeURIComponent(searchText)}`)
        .then(response => response.json())
        .then(apiResult => {
            return apiResult.results;
        })
        .catch(err => console.log(err));
  }

  useEffect(() => {
    if (searchText === undefined || searchText === null) {
      searchText = "Boston";
    }
    const fetchData = async() => setPlaceList(await fetchPlaces(searchText));
    fetchData();
  }, [searchText])

  return(
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={placeList}
      renderItem={item => (
        <List.Item
          className="placelist-info-container"
          key={item.name}
          extra={
            <img
              width={280}
              src={photo_url(item.photos[0].photo_reference)} alt="..." 
            />
          }
        >
          <Link to={`/results/${item.place_id}`}>
            <h4>{item.name}</h4>
            <h6>Address: {item.vicinity}</h6>
            <h6>Rating: {item.rating}</h6>
          </Link>
        </List.Item>
      )}
    />
  )
}
