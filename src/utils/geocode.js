const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmF1bmFrYmFnIiwiYSI6ImNsYW1tcXFpMTBneW8zb3VydDBkZGloazUifQ.NBkZOQoS2lmXefl6r5BN-w'

        request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
            // console.log(error);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
            console.log(error);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}



module.exports = geocode