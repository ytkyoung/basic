import styled from 'styled-components';
// import { motion } from 'framer-motion';

const ProjectItemTest = (props) => {
  return (
    <TestStyle>
      <div className="showhi">
        <img src={props.project.img} alt={props.project.title} />
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
  padding: 0rem 3rem;
  height: 80vh;
  display: flex;
  justify-content: center;
  border-left: 1px solid #f9cdcd;
  color: #f9cdcd;
  .showme {
    width: 35rem;
    overflow: hidden; // Hide the element content, while height = 0
    height: 0;
    opacity: 0;
    transition: max-height 600ms 0ms, opacity 600ms 0ms;
    scroll-snap-align: center;
    p {
      color: #f9cdcd;
    }
    button {
      color: #f4f4f4;
      padding: 0;
    }
  }
  .showhi {
    h2 {
      margin-top: 3rem;
    }
  }
  .showhi img {
    width: 100%;
    object-fit: cover;
    transition: all 1s ease-in-out;
  }

  .showhi:hover .showme {
    height: auto;
    opacity: 1;
  }

  .showhi:hover img {
    height: auto;
    opacity: 1;
    width: 35rem;
    max-height: 200px;
    object-fit: cover;
  }
  .showhi:hover .hideme {
    height: auto;
    opacity: 1;
  }
  .showhi:hover ~ .hideme2 {
    height: auto;
    opacity: 1;
  }
`;
export default ProjectItemTest;
