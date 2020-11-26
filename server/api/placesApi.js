module.exports = (app) => {
  const {Client} = require("@googlemaps/google-maps-services-js");
  const axios = require('axios');
  const client = new Client({});

  // get lat, lng for an address
  const fetchGeoLocation = async (address) => {
    try {
      const geoLocation = await client.geocode({
        params: {
          address,
          key: process.env.GOOGLE_MAPS_API_KEY
        },
        timeout: 1000
      }, axios);
      console.log(`the geoLocation for ${address} is ${geoLocation.data.results[0].geometry.location}`);
      return geoLocation.data.results[0].geometry.location;
    } catch(err) {
      console.log(err);
      return [];
    }
  }

  const fetchNearbyLocations = async (pageToken, geoLocation) => {
    var parameters = {
      location: geoLocation,
      key: process.env.GOOGLE_MAPS_API_KEY,
      radius: 5000,
      type: 'tourist_attraction'
    }
    if (pageToken !== null || pageToken !== undefined) {
      parameters.pageToken = pageToken
    }

    try {
      const places = await client.placesNearby({
        params: parameters,
        timeout: 1000 // milliseconds
      }, axios);
      console.log(`returning places: ${places}`)
      return places.data;
    } catch(err) {
      console.log(err);
      return []
    }
  }

  // search nearby places of a given address
  const getAllPlaces = (req, res) => {
    let pageToken = req.query.pageToken || null;
    let searchText = req.query.searchText;
    if (searchText === "" || searchText === null || searchText === undefined) {
      res.json({});
    } else {
      fetchGeoLocation(searchText).then(geoLocation => {
        fetchNearbyLocations(pageToken, geoLocation).then(apiResult => {
          res.json(apiResult);
        });
      });
    }
  }

  const fetchPlaceDetail = async (placeId) => {
    try {
      const details = await client.placeDetails({
        params: {
          place_id: placeId,
          key: process.env.GOOGLE_MAPS_API_KEY
        },
        timeout: 1000
      }, axios);
      console.log(`the id for place is ${placeId}, details: ${details.data.result.name}`);
      return details.data;
    } catch(err) {
      console.log(err);
      return [];
    }
  }

  const getPlaceDetail = (req, res) => {
    console.log('hitting server');
    let placeId = req.params.uid;
    if (placeId === "" || placeId === null || placeId === undefined) {
      res.json({});
    }else{
      fetchPlaceDetail(placeId).then(detailResult =>{
        res.json(detailResult);
      })
    }  
  }

  app.get('/api/places', getAllPlaces)
  app.get('/api/place/:uid', getPlaceDetail)
}
