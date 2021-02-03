import styled from 'styled-components';
import img from '../img/About-Gallery_2.jpg';

const TestBox2 = (props) => {
  return (
    <>
      <Box>
        <div className="hover-image">
          <img src={img} alt="" />
        </div>
        <h4>(02)</h4>
      </Box>
    </>
  );
};

const Box = styled.div`
  position: absolute;
  background: #00ffaa;
  padding: 2rem;
  transition: all 0.5s ease;
  .hover-image {
    width: 500px;
    img {
      width: 100%;
    }
  }
  @media (max-width: 890px) {
    background: #ff7b00;
    padding: 1rem;
    .hover-image {
      width: 220px;
    }
  }
`;

export default TestBox2;
