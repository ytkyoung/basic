import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectItemTest = (props) => {
  return (
    <TestStyle>
      <div className="showhim">
        <motion.img
          src={props.project.img}
          alt={props.project.title}
          whileHover={{
            scaleY: 1.1,
            type: 'tween',
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        />
        <h2>{props.project.title} </h2>
        <h3>{props.project.subtitle}</h3>
        <div className="showme">
          <p>{props.project.text}</p>
          <div className="hideme2">
            <button>Visit the Site</button>
          </div>
        </div>
        {/* <div className="hideme">bye</div> */}
      </div>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  height: 80vh;
  background: red;
  display: flex;
  justify-content: center;

  .showme {
    width: 400px;
    overflow: hidden; // Hide the element content, while height = 0
    height: 0;
    opacity: 0;
    transition: max-height 600ms 0ms, opacity 600ms 0ms;
    background: blue;
    scroll-snap-align: center;
    background-color: #00ff15;
  }

  .showhim img {
    width: 100%;
    object-fit: cover;
    transition: all 1s ease-in-out;
  }

  .showhim:hover .showme {
    height: auto;
    opacity: 1;
  }

  .showhim:hover img {
    height: auto;
    opacity: 1;
    width: 400px;
    max-height: 200px;
    object-fit: cover;
  }
  .showhim:hover .hideme {
    height: auto;
    opacity: 1;
  }
  .showhim:hover ~ .hideme2 {
    height: auto;
    opacity: 1;
  }
`;
export default ProjectItemTest;
