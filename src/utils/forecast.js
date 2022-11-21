const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=de410b28456cc28b30cb56dd6ae5f4f6&query=' + latitude + ',' + longitude + '&units=m'

       request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Network not available',undefined);
        } else if (body.error) {
            callback('Unable to find location',undefined);
        }
        else {
            callback(undefined,body.current.weather_descriptions[0] + ' .It is currently' + ' ' + body.current.temperature + ' ' + 'degree. There is ' + body.current.precip + '% chance of rain.');
        }
        // console.log(response);
        // const data = JSON.parse(response.body)
        // console.log(data.current);
    })
}


module.exports = forecast