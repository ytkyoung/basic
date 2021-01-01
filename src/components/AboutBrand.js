import basicLogo from '../img/logo_pink.svg';
import styled from 'styled-components';

const AboutBrand = () => {
  return (
    <>
      <AboutBrandLogo>
        <img src={basicLogo} alt="" />
      </AboutBrandLogo>
    </>
  );
};

const AboutBrandLogo = styled.div`
  padding: 5rem 0rem;
  border-top: 2px solid green;
  border-bottom: 2px solid green;
  & img {
    width: 50%;
  }
`;

export default AboutBrand;
