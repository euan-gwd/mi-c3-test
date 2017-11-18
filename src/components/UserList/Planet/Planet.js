import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Planet extends Component {
  state = { planetData: [] };

  componentDidMount() {
    if (this.props.url !== null) {
      axios.get(this.props.url).then(res => {
        this.setState({ planetData: res.data });
      });
    }
  }

  render() {
    const { planetData } = this.state;
    return (
      <div>
        <Header>{this.props.username} Homeworld:</Header>
        <PlanetGridHeaderBar>
          <div>Name</div>
          <div>Diameter</div>
          <div>Climate</div>
          <div>Terrain</div>
          <div>Population</div>
        </PlanetGridHeaderBar>
        <PlanetGridTable>
          <div>{planetData.name}</div>
          <div>{planetData.diameter}</div>
          <div>{planetData.climate}</div>
          <div>{planetData.terrain}</div>
          <div>{planetData.population}</div>
        </PlanetGridTable>
      </div>
    );
  }
}
const Header = styled.h2`
  text-align: center;
`;

const PlanetGridHeaderBar = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 50px;
  box-sizing: border-box;
  align-items: center;
  justify-items: center;

  border: 1px solid black;
  box-shadow: 0 2px 5px 0 rgba(50, 50, 50, 0.75);
  background-color: #fda61e;
  color: whitesmoke;
`;

const PlanetGridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(50px, 1fr));
  grid-auto-rows: 50px;
  box-sizing: border-box;
  align-items: center;
  justify-items: center;
  border: 0.25px solid grey;
`;

export default Planet;
