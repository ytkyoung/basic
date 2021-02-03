import styled from 'styled-components';
import img from '../img/About-Gallery_3.jpg';

const TestBox4 = (props) => {
  return (
    <>
      <Box>
        <div className="hover-image">
          <img src={img} alt="" />
        </div>
        <h4>(04)</h4>
      </Box>
    </>
  );
};

const Box = styled.div`
  position: absolute;
  background: #001aff;
  padding: 2rem;
  transition: all 0.5s ease;
  .hover-image {
    width: 500px;
    & img {
      width: 100%;
    }
  }
  @media (max-width: 890px) {
    background: magenta;
    .hover-image {
      width: 250px;
    }
  }
`;

export default TestBox4;
