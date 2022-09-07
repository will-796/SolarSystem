import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions" className="missions">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </>
    );
  }
}
