import React, { Component } from 'react';
import Header from '../../Header';
import ProjectSelector from '../../ProjectSelector';
import projects from './projects';
import './styles.css';

export const PORTFOLIO = 'PORTFOLIO';

const cName = 'Portfolio';

class Portfolio extends Component {
  render() {
    return (
      <div className={cName}>
        <Header>Portfolio</Header>

        <ProjectSelector
          projects={[
            projects.peatys,
            projects.chiba,
          ]}
        />
      </div>
    );
  }
}

export default Portfolio;
