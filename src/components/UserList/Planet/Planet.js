import React, { Component } from 'react';
// import axios from 'axios';

class Planet extends Component {
  state = { planetData: [] };
  componentDidMount = () => {
    const url = this.props.url;
    // axios.get(`https://swapi.co/api/people`).then(res => {
    //   const planetData = res.data.results;
    //   this.setState({ planetData });
    // });
  };
  render() {
    return <div />;
  }
}

export default Planet;
