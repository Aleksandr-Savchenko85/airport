import { getFlightData } from './flights.gateway.js';

export const FLIGHT_DATA_RECIEVED = 'FLIGHT_DATA_RECIEVED';

export const flightDataRecieved = (flightData) => {
    return {
        type: FLIGHT_DATA_RECIEVED,
        payload: {
            flightData
        }
    }
};

 export const fetchFlightData = (flight) => {
    return function (dispatch) {
        getFlightData(flight)
            .then(flightData => {
                dispatch(flightDataRecieved(flightData))
            })
    }
}
 