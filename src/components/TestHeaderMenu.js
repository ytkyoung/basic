// import React, { useState } from 'react';
// import styled from 'styled-components';

// export default function App() {
//   const [inHover, setHover] = useState(false);

//   return (
//     <TestStyle>
//       <button
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         Hover over me!
//       </button>
//       {inHover && (
//         <div className="test">
//           <h1>Hi!</h1>
//         </div>
//       )}
//     </TestStyle>
//   );
// }

// const TestStyle = styled.div`
//   background: red;
//   height: auto;

//   .test {
//     opacity: 1;
//     transition: height 0ms 0ms, opacity 600ms 0ms;
//   }
// `;

import work from '../img/selected-work3.jpg';

import styled from 'styled-components';

const TestHeaderMenu = () => {
  return (
    <TestStyle>
      <div className="showhim">
        <img src={work} alt="" />
        <h2>CULTURE MANUAL</h2>
        <h3>Agency Culture</h3>
        <div className="showme">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            accusamus illo rerum. Voluptatem reprehenderit id maxime, vero
            aperiam ea optio.
          </p>
          <div className="hideme2">
            <button>Visit the Site</button>
          </div>
        </div>
        <div className="hideme">bye</div>
      </div>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  height: 70vh;
  background: red;
  display: flex;
  justify-content: center;
  transition: all 2s ease;
  .showme {
    overflow: hidden; // Hide the element content, while height = 0
    height: 0; opacity: 0;
    transition: height 0ms 400ms, opacity 400ms 0ms;
    background: blue;
  }

  .showhim img {
    width: 100%

    object-fit: cover;
    transition: all 0.5s ease;
  }

  .showhim:hover .showme {
    height: auto; opacity: 1;
    transition: height 0ms 0ms, opacity 600ms 0ms;
  }

  .showhim:hover img {
    height: auto; opacity: 1;
    transition: height 0ms 0ms, opacity 600ms 0ms;
    width: 400px;
    height: 200px;
    object-fit: cover;
    }
  .showhim:hover .hideme {
    height: auto; opacity: 1;
    transition: height 0ms 0ms, opacity 600ms 0ms;
  }
  .showhim:hover ~ .hideme2 {
    height: auto; opacity: 1;
    transition: height 0ms 0ms, opacity 600ms 0ms;
  }
`;

export default TestHeaderMenu;

// import React, { Component } from 'react';
// import work from '../img/selected-work3.jpg';
// import styled from 'styled-components';

// class TestHeaderMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseHover = this.handleMouseHover.bind(this);
//     this.state = {
//       isHovering: false,
//     };
//   }

//   handleMouseHover() {
//     this.setState(this.toggleHoverState);
//   }

//   toggleHoverState(state) {
//     return {
//       isHovering: !state.isHovering,
//     };
//   }

//   render() {
//     return (
//       <TestStyle>
//         <div
//           onMouseEnter={this.handleMouseHover}
//           onMouseLeave={this.handleMouseHover}
//         >
//           <div className="selected-works">
//             <div className="work-img">
//               <img src={work} alt="" />
//             </div>
//             <div className="work-title">
//               <h2>CULTURE MANUAL</h2>
//               <h3>Agency CULTURE</h3>
//             </div>
//           </div>
//           {this.state.isHovering && (
//             <div className="work-text">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Perspiciatis voluptatum enim aspernatur quidem sapiente vel
//                 impedit sequi et asperiores suscipit?
//               </p>
//             </div>
//           )}
//         </div>
//       </TestStyle>
//     );
//   }
// }

// const TestStyle = styled.section`
//   width: 50rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: red;

//   .work-img img {
//     width: 100%;
//   }
// `;

// export default TestHeaderMenu;
