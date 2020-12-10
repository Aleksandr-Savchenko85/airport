import React from 'react';
import { Provider } from 'react-redux';
import SearchField from './components/flights/SearchField';
import store from './store';
import FlightsList from './components/flights/FlightsList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/flights/Navigation';
import NavigationHeader from './components/flights/NavigationHeader';
import Logo from './components/flights/Logo';


const App = () => {
    return (
        <div className='page'>
            <NavigationHeader/>
            <Provider store={store}>
                <Router>
                    <SearchField />
                    <Switch>
                        <Route exact path="/">
                            <Navigation />
                        </Route>
                        <Route path="/:flightStatus">
                            <FlightsList />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
};

export default App;

