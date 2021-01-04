import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../data/projects.json';
import ProjectItemTest from '../components/ProjectItemTest';

class Menu extends Component {
  render() {
    var visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return (
      <TestWrapper>
        <div
          id="flyoutMenu"
          // onMouseDown={this.props.handleMouseDown}
          className={visibility}
        >
          <div className="button-box">
            <h2>(06 )Internal Works</h2>
            <button onMouseDown={this.props.handleMouseDown}>
              <h2>x</h2>
            </button>
          </div>
          <div className="project-lists">
            {data.map((project, index) => (
              <ProjectItemTest key={index} project={project} />
            ))}
          </div>
        </div>
      </TestWrapper>
    );
  }
}
const TestWrapper = styled.div`
  background: magenta;

  .button-box {
    padding: 0 3rem;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .project-lists {
    display: flex;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
  button {
    border: 50%;
  }
`;

export default Menu;
