import logo from '../img/footer-logo-bg-white1.svg';
import styled from 'styled-components';

import Logo from '../components/Logo';

const LogoBranding = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <TestStyle>
      <div className="logo-box">
        {isLight ? <img src={logo} alt="logo basic" /> : <Logo />}
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
