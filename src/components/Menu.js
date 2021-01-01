import React, { Component } from 'react';
import styled from 'styled-components';
import TestHeaderMenu from '../components/TestHeaderMenu';

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
          <TestHeaderMenu />
        </div>
      </TestWrapper>
    );
  }
}
const TestWrapper = styled.div`
  background: magenta;
  height: 100%;
`;

export default Menu;
