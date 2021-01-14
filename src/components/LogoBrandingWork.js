import styled from 'styled-components';

import LogoBrandPink from '../components/LogoBrandPink';
import LogoBrandBlack from '../components/LogoBrandBlack';

const LogoBranding = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <LogoStyle>
      <div className="logo-box">
        {isLight ? <LogoBrandBlack /> : <LogoBrandPink />}
      </div>
    </LogoStyle>
  );
};

const LogoStyle = styled.div`
  width: 50%;
  .logo-box img {
    width: 100%;
  }
`;

export default LogoBranding;
