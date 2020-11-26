import React, {useEffect, useState} from "react";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const photo_url = (ref) => 
`https://maps.googleapis.com/maps
/api/place/photo?photoreference=
${ref}&key=AIzaSyBlHhL9EqgJx0ZFIuzc5vn2yUAe96pZhs8&maxheight=260&maxwidth=260`;

export default function PlaceList({searchText}) {
  const [placeList, setPlaceList] = useState([]);

  const fetchPlaces = (address) => {
    return fetch(`/api/places?searchText=${encodeURIComponent(address)}`)
        .then(response => response.json())
        .then(data => {
            return data.results;
        })
        .catch(err => console.log(err));
  }

  useEffect(() => {
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
              alt="logo"
              src={`${photo_url(item.photos[0].photo_reference)}`}
            />
          }
        >
          <div>
            <h4>{item.name}</h4>
            <h5>address: {item.vicinity}</h5>
            <h5>rating: {item.rating}</h5>
          </div>
        </List.Item>
      )}
    />
  )
}
