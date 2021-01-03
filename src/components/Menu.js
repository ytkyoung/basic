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
          <h2>aasdasdas</h2>

          <button onMouseDown={this.props.handleMouseDown}>TEST</button>
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
  .project-lists {
    display: flex;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
`;

export default Menu;
