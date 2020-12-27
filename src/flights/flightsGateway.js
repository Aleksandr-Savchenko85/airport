import moment from "moment";

const currentDate = moment().format("DD-MM-YYYY");


const baseUrl = `https://api.iev.aero/api/flights/${currentDate}`;

//console.log(baseUrl.responce.text)
export const fetchFlightsList = () => {
  return fetch(baseUrl)
    .then(responce => {
      if (responce.ok) {
        return responce.json();
      }
      throw new Error('failed to get flightsList');
    })
   
};

console.log(fetchFlightsList())



