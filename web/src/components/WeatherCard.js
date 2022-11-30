import React from 'react'
import '../Style.css'


class WeatherCard extends React.Component {

    constructor(props) {
        super(props)
    }

    spitOutCelcius = (kelvin) => {
        // const celcius = Math.round(kelvin - 273.15);
        // return celcius;
    }

    getWeatherIcon = (iconParameter) => {
        // const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`
        // return <img src = {icon} alt = "" />
    }

    render() {
        return (
            <div className="card rounded my-3 shadow-lg back-card">
                <div className="card-top text-center my-3">
                    <div className="city-name my-3">
                        <p>{this.props.weatherResult.temp}</p>
                        <span>...</span>
                    </div>
                </div>

                <div className="card-body my-5">
                    <div className="card-mid row">
                        <div className="col-8 text-center temp">
                            <span>{this.props.weatherResult.temp}&deg;C</span>
                        </div>
                        <div className="col-4 condition-temp">
                            <p className="condition">{this.props.weatherResult.time}</p>
                     
                        </div>
                    </div>

                    <div className="icon-container card shadow mx-auto">
                    </div>
                    <div className="card-bottom px-5 py-4 row">
                        <div className="col text-center">
                            <p>{this.props.weatherResult.feels}&deg;C</p>
                            <span>Feels Like</span>
                        </div>
                        <div className="col text-center">
                            <p>{this.props.weatherResult.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherCard;