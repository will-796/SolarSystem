import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/SolarSystem.css';

export default class SolarSystem extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  handleClickNext = () => {
    const { index } = this.state;
    if (index < planets.length - 1) {
      this.setState((prev) => ({
        index: prev.index + 1,
      }));
    }
  };

  handleClickPrev = () => {
    const { index } = this.state;
    if (index > 0) {
      this.setState((prev) => ({
        index: prev.index - 1,
      }));
    }
  };

  render() {
    const { index } = this.state;
    return (
      <div data-testid="solar-system" className="solar-system">
        Sistema Solar
        <Title headline="Planetas" />
        <div className="carroseur">
          <button type="button" onClick={ this.handleClickPrev }>
            anterior
          </button>
          {
            planets.map(({ name, image }) => (
              <PlanetCard key={ name } planetName={ name } planetImage={ image } />
            ))[index]
          }
          <button type="button" onClick={ this.handleClickNext }>
            proximo
          </button>
        </div>
      </div>
    );
  }
}
