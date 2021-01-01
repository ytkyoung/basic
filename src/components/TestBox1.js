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
        <h1>test1</h1>
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
    width: 700px;
    & img {
      width: 100%;
    }
  }
`;

export default TestBox1;
