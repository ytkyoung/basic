import styled from 'styled-components';
import img from '../img/About-Gallery_4.jpg';

const TestBox3 = (props) => {
  return (
    <>
      <Box>
        <div className="hover-image">
          <img src={img} alt="" />
        </div>
        <h4>(03)</h4>
      </Box>
    </>
  );
};

const Box = styled.div`
  position: absolute;
  background: #bbff00;
  padding: 2rem;
  transition: all 0.5s ease;
  .hover-image {
    width: 500px;
    & img {
      width: 100%;
    }
  }
  @media (max-width: 890px) {
    background: #ffc400;
    .hover-image {
      width: 250px;
    }
  }
`;

export default TestBox3;
