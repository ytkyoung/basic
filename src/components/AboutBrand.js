// import basicLogo from '../img/logo_pink.svg';
import styled from 'styled-components';
import LogoAni from '../components/LogoAni2';

const AboutBrand = ({ theme }) => {
  return (
    <>
      <AboutBrandLogo>
        <LogoAni theme={theme} />
      </AboutBrandLogo>
    </>
  );
};

const AboutBrandLogo = styled.div`
  padding: 5rem 0rem;
  border-top: 1px solid ${({ theme }) => theme.text};
  width: 100%;
  & img {
    width: 50%;
  }
  .container-svg {
    width: 50%;
    /* fill: white; */
  }
  @media (max-width: 890px) {
    svg {
      width: 450px;
    }
  }
`;

export default AboutBrand;
