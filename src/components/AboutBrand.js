// import basicLogo from '../img/logo_pink.svg';
import styled from 'styled-components';
import LogoAni from '../components/LogoAni2';

const AboutBrand = () => {
  return (
    <>
      <AboutBrandLogo>
        <LogoAni />
      </AboutBrandLogo>
    </>
  );
};

const AboutBrandLogo = styled.div`
  padding: 5rem 0rem;
  border-top: 1px solid #252422;

  & img {
    width: 50%;
  }
  .container-svg {
    width: 50%;
    /* fill: white; */
  }
`;

export default AboutBrand;
