import logo from '../img/branding-img.svg';
import styled from 'styled-components';

const LogoBranding = () => {
  return (
    <TestStyle>
      <div className="logo-box">
        <img src={logo} alt="logo basic" />
      </div>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  width: 50%;
  .logo-box img {
    width: 100%;
  }
`;

export default LogoBranding;
