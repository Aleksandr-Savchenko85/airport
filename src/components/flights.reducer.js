import {  FLIGHT_DATA_RECIEVED, } from '..//components/flights.actions';

const initialState = {
    isFetching: false,
    flightData: null,
};

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FLIGHT_DATA_RECIEVED:
            return {
                ...state,
                flightData: action.payload.flightData,
                isFetching: false
            }
        default:
            return state;
    }
};
export default flightsReducer