import { FLIGHTS_LIST_RECIEVED} from './flights.actions';

const initialState = {
    flightsList: {body: {}},
    isFetching: false,
    
};

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
     
      case FLIGHTS_LIST_RECIEVED:
        
        return {
          ...state,
          flightsList: action.payload.flightsList,
          isFetching: false,
        };
       

      default:
        return state;
    }
};

export default flightsReducer;