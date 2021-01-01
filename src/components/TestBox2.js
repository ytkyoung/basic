import styled from 'styled-components';
import img from '../img/About-Gallery_2.jpg';

const TestBox2 = (props) => {
  return (
    <>
      <Box>
        <div className="hover-image">
          <img src={img} alt="" />
        </div>
        <h1>test2</h1>
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
    width: 700px;
    & img {
      width: 100%;
    }
`;

export default TestBox2;
