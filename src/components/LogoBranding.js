import styled from 'styled-components';

import LogoBlack from '../components/LogoBrandBlack';
import LogoWhite from '../components/LogoBrandWhite';

const LogoBranding = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <LogoStyle>
      <div className="logo-box">{isLight ? <LogoWhite /> : <LogoBlack />}</div>
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
