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
            <h3>(06 )Internal Works</h3>
            <h3>
              A collection of internal project and initiatives under the BASIC®
              brand.
            </h3>
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
  .button-box {
    padding: 5rem 3rem;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2,
    h3 {
      color: #f9cdcd;
    }
  }
  .project-lists {
    display: flex;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
  button {
    border: 50%;
    border: 2px solid #f9cdcd;
  }
  button:hover {
    background-color: #f9cdcd;
    h2 {
      color: #252422;
    }
  }
`;

export default Menu;
