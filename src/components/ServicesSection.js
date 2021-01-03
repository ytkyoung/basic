import styled from 'styled-components';
import LogoBranding from '../components/LogoBranding';

const ServicesSection = () => {
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
          <button>SEE THE WORK</button>
        </div>
        <div className="branding">
          <LogoBranding />
        </div>
      </div>
    </ServiceStyle>
  );
};
const ServiceStyle = styled.div`
  margin: 2rem 0rem;
  padding: 1rem 0rem;
  border-top: 1px solid #252422;
  border-bottom: 1px solid #252422;
  .services {
    height: 55vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .description {
    flex: 1 1 60%;
    align-self: flex-start;
    background: red;
    h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
      padding-top: 2rem;
    }
    h2 {
      font-size: 3.5rem;
      padding-top: 3rem;
      padding-bottom: 4.3rem;
      line-height: 120%;
    }
  }
  .branding {
    flex: 1 1 40%;
    background: green;
    display: flex;
    padding-top: 2rem;
    justify-content: flex-end;
    align-self: flex-start;
  }
`;

export default ServicesSection;
