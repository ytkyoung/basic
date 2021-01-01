import TestBox1 from '../components/TestBox1';
import TestBox2 from '../components/TestBox2';
import TestBox3 from '../components/TestBox3';
import TestBox4 from '../components/TestBox4';
import styled from 'styled-components';

const AboutGallery = () => {
  return (
    <TestWrapper>
      <Pos1>
        <TestBox1 />
      </Pos1>
      <Pos2>
        <TestBox2 />
      </Pos2>
      <Pos3>
        <TestBox3 />
      </Pos3>
      <Pos4>
        <TestBox4 />
      </Pos4>
    </TestWrapper>
  );
};

const TestWrapper = styled.div`
  position: relative;
  background: red;
  height: 200vh;
`;

const Pos1 = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
  z-index: 2;
  filter: grayscale(50%);

  &:hover {
    z-index: 100;
    filter: grayscale(10%);
  }
`;

const Pos2 = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  z-index: 4;
  filter: grayscale(50%);
  &:hover {
    z-index: 100;
    filter: grayscale(10%);
  }
`;

const Pos3 = styled.div`
  position: absolute;
  top: 15%;
  left: 40%;
  z-index: 1;
  filter: grayscale(50%);
  &:hover {
    z-index: 100;
    filter: grayscale(10%);
  }
`;

const Pos4 = styled.div`
  position: absolute;
  top: 40%;
  left: 55%;
  z-index: 0;
  filter: grayscale(50%);
  &:hover {
    z-index: 100;
    filter: grayscale(10%);
  }
`;

export default AboutGallery;
