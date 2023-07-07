import axios from "axios";
import { searchAdapter } from "../adapter/search-geo.adapter";

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/search-geo',
  params: {
    ne_lat: '52.51',
    ne_lng: '13.41',
    sw_lat: '52.41',
    sw_lng: '13.31',
    checkin: '2023-09-15',
    checkout: '2023-09-16',
    adults: '1',
    children: '0',
    infants: '0',
    pets: '0',
    page: '1',
    currency: 'USD'
  },
  headers: {
    'X-RapidAPI-Key': '638177ac19msh9f767c6d46df894p18f7a0jsn530a12893eb9',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};
export const fetchSearchGeo = async () => {
  try {
    const response = await axios.get('/src/data/property.json');
    const data = response.data.results?.map(product => {
      return searchAdapter(product)
    })
    return data
  } catch (error) {
    console.error(error);
  }
};