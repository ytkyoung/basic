import styled from 'styled-components';
import img from '../img/About-Gallery_1.jpg';

const TestBox1 = (props) => {
  console.log(props);
  console.log('asdasd');
  return (
    <>
      <Box>
        <div className="hover-image">
          <img src={img} alt="" />
        </div>
        <h4>(01)</h4>
      </Box>
    </>
  );
};

const Box = styled.div`
  position: absolute;
  background: #ff7300;
  padding: 2rem;
  transition: all 0.5s ease;
  .hover-image {
    width: 500px;
    & img {
      width: 100%;
    }
  }
  @media (max-width: 890px) {
    background: #00ffdd;
    .hover-image {
      width: 250px;
    }
  }
`;

export default TestBox1;
