const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=d6ee3268ac0dfd5ccb738fa1190daa28&query="+latitude+","+longitude

    request({ url, json: true }, (error, response) => {
        if(error){
            callback("Unable to connect to Weather Service!", undefined)
        }
        else if(response.body.error){
            callback("Unable to find Weather. Try another search.", undefined)
        }
        else{
            callback(undefined, response.body.current.weather_descriptions[0]+": It is "+response.body.current.temperature+" degrees out. It feelslike "+response.body.current.feelslike+" degrees out. Humidity is about "+response.body.current.humidity+"%")
        }
    })
}

module.exports = forecast