import React, { Component } from 'react';
import axios from 'axios';

class Planet extends Component {
  state = { data: [] };
  componentDidMount = () => {
    const url = this.props.url;
    axios.get(url).then(res => {
      this.setState({ data: res.data });
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="planet-grid-headers">
          <div>Name: {data.name}</div>
          <div>Climate: {data.climate}</div>
          <div>Terrain: {data.terrain}</div>
          <div>Diameter: {data.diameter}</div>
          <div>Gravity: {data.gravity}</div>
          <div>Orbital Period: {data.orbital_period}</div>
          <div>Population: {data.population}</div>
          <div>Rotation Period: {data.rotation_period}</div>
          <div>Surface Water: {data.surface_water}</div>
        </div>
      </div>
    );
  }
}

export default Planet;
