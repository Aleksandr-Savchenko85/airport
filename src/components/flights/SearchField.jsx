import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import qs from 'qs';
import * as flightActions from '..//flights.actions';
import { useLocation, BrowserRouter, useParams, useHistory } from 'react-router-dom';
import {flightDataSelector} from '..//flights.selectors';

const SearchField = ({fetchFlightData }) => {

    const [searchValue, setFlightSearchText] = useState(searchString)  

    
    const { flightStatus } = useParams()
    const { search } = useLocation();
    const searchString = qs.parse(search, { ignoreQueryPrefix: true }).search;

    let history = useHistory();
    

    useEffect(() => {
        fetchFlightData();
    }, [])

    const handlerSearchFlight = () => {
        if (!flightStatus) {
            history.push({ pathname: '/departures', search: `?search=${searchValue}` });
        } else {
            history.push({ ...history, search: `?search=${searchValue}` });
        }
    }


    return (<>
        <BrowserRouter>
            <div className='container-header'>
                <div className='title-header'>SEARCH FLIGHT</div>
                <div className='search-transit'>
                    <div className="search-block">
                        <i className="fas fa-search" style={{
                            color: 'grey',
                            fontSize: '25px'
                        }}></i>
                    </div>
                    <input placeholder='Airline, destination or flight #'
                        onChange={event => setFlightSearchText(event.target.value)}
                        value={searchValue} />
                    <button className='search-button' onClick={handlerSearchFlight}>SEARCH</button>
                </div>
            </div>
        </BrowserRouter>
    </>
    )
}
const mapState = state => {
    return {
        flightData: flightDataSelector(state)
    }
}
const mapDispatch = {
       fetchFlightData: flightActions.fetchFlightData,
}
export default connect(mapState, mapDispatch)(SearchField)