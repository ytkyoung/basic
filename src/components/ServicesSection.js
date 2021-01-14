import styled from 'styled-components';
import LogoBrandingWork from '../components/LogoBrandingWork';
import { Link } from 'react-router-dom';

const ServicesSection = ({ theme }) => {
  console.log(theme);
  console.log('hallo theme');
  return (
    <ServiceStyle>
      <div className="services">
        <div className="description">
          <h3>STRATEGY, DESIGN, TECHNOLOGY</h3>
          <h2>
            BASIC® is a <span>branding</span> and <span>digital design </span>
            agency building products, services, and ecommerce experiences that
            turn cultural values into company value.
          </h2>
          <button>
            <Link to="/work">SEE THE WORK</Link>
          </button>
        </div>
        <div className="branding">
          <LogoBrandingWork theme={theme} />
        </div>
      </div>
    </ServiceStyle>
  );
};
const ServiceStyle = styled.div`
  margin: 2rem 0rem;
  padding: 1rem 0rem;
  border-top: 1px solid ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text};
  .services {
    height: 55vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .description {
    flex: 1 1 60%;
    align-self: flex-start;
    h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
      /* padding-top: 2rem; */
    }
    h2 {
      font-size: 3.5rem;
      padding-top: 5rem;
      padding-bottom: 4.3rem;
      line-height: 120%;
    }
  }
  .branding {
    flex: 1 1 40%;
    display: flex;
    padding-top: 2rem;
    justify-content: flex-end;
    align-self: flex-start;
  }
  @media (max-width: 1300px) {
    background: green;
  }
  @media (max-width: 890px) {
    background: magenta;
    flex-direction: column;
    .services {
      flex-direction: column;
      height: 40vh;
    }
    .branding {
      flex-direction: column;
    }
  }
`;

export default ServicesSection;
