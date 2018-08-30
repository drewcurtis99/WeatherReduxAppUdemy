import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart' // This simple component was created because we will have multiple charts in our weather table. Repeated code is an opportunity to refactor and use reusable components.
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord; // This is ES6 shortcut syntax for variables with the same object path. ES5 would be const "lon - cityData.city.coord.lon" then another const for lat.

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="F" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather} === { weather: state.weather }. In that last scenario the argument to mapStateToProps would be (state) instead of { weather } which in itself is = to const weather = state.weather. All ES6 to stretch your brain capacity ;D
}

export default connect(mapStateToProps)(WeatherList);