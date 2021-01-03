import logo from '../img/branding-img.svg';
import styled from 'styled-components';

const LogoFooter = () => {
  return (
    <TestStyle>
      <img src={logo} alt="logo basic" />
    </TestStyle>
  );
};

const TestStyle = styled.div`
  width: 50%;
  .logo-box img {
    width: 100%;
  }
`;

export default LogoFooter;
