import moment from 'moment';
const baseUrl = 'https://api.iev.aero/api/flights';



export const getFlightData = () =>
    fetch(`${baseUrl}/${currentDate}`).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error();
    });

    export const currentDate = moment().format("YYYY-MM-DD");
