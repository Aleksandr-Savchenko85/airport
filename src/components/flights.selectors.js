export const isFetchingSelector = state=>{
    return state.flights.isFetching; // selector
}

export const flightDataSelector = state =>{
    return state.flights.flightData; // selector
}