import React, { Component } from 'react';
import axios from 'axios';
import './Planet.css';

class Planet extends Component {
  state = { planetData: [] };

  componentDidMount() {
    if (this.props.url) {
      axios.get(this.props.url).then(res => {
        this.setState({ planetData: res.data });
      });
    }
  }

  render() {
    const { planetData } = this.state;
    return (
      <div>
        <h2>{this.props.username} Homeworld:</h2>
        <div className="planet-grid-headers">
          <div>Name</div>
          <div>Diameter</div>
          <div>Climate</div>
          <div>Terrain</div>
          <div>Population</div>
        </div>
        <div className="planet-grid-data">
          <div>{planetData.name}</div>
          <div>{planetData.diameter}</div>
          <div>{planetData.climate}</div>
          <div>{planetData.terrain}</div>
          <div>{planetData.population}</div>
        </div>
      </div>
    );
  }
}

export default Planet;
