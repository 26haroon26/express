import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard'
let baseUrl ='';
if (window.location.href.split(':')[0]=== 'http') {
    baseUrl = 'http://localhost:5000'
}
class App extends React.Component{

    state = {weatherResult: null}

    onSearchSubmit = async (searchInputValue) => {
        const response = await axios.get(`${baseUrl}/weather/${searchInputValue}`)
        this.setState({weatherResult: response.data})
     }

    render() {
        return(
            <div className="container my-5">
                <h1 className="text-center title">Weather in</h1>
                 <CitySearch onSearchSubmit = {this.onSearchSubmit} />
                 {this.state.weatherResult ?  <WeatherCard weatherResult = {this.state.weatherResult} /> : <div></div>}
            </div>
        )
    }

}

export default App;