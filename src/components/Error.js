import styled from 'styled-components';
import { IntroPlane } from '../styles';

const Error = () => {
  return (
    <ErrorStyle>
      <div className="error-one">
        <h1>404 Error</h1>
      </div>
      <div className="error-one">
        <h1>o_O</h1>
      </div>
    </ErrorStyle>
  );
};

const ErrorStyle = styled(IntroPlane)`
  margin: 0 auto;
  padding: 0 5%;
`;
export default Error;
