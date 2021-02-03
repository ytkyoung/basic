import styled from 'styled-components';
import AboutCapabilitiesItem from '../components/AboutCapabilitiesItem';
import data from '../data/capabilities.json';

const AboutCapabities = () => {
  return (
    <SnapStyle>
      <div className="capa-title">
        <h2>CAPABILITIES</h2>
      </div>
      <div className="capa-lists">
        {data.map((capa, index) => (
          <AboutCapabilitiesItem key={index} capa={capa} test={capa.subs} />
        ))}
      </div>
    </SnapStyle>
  );
};

const SnapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 18vh;
  .capa-title {
    flex: 1 1 30%;
    h2 {
      width: 50%;
    }
  }
  .capa-lists {
    flex: 1 1 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .capa-card {
    flex: 1 1 50%;
    padding: 0rem 10rem 10rem 0rem;
    p {
      width: 80%;
    }
    li {
      padding-top: 1rem;
      font-size: 1.8rem;
      width: 80%;
    }
  }
  @media (max-width: 690px) {
    flex-direction: column;
    .capa-title {
      flex: 1 1 100%;
      margin-bottom: 8rem;
      h2 {
        width: 100%;
      }
    }
    .capa-lists {
      flex: 1 1 50%;
    }

    .capa-card-title {
      h2 {
        font-size: 2rem;
        padding-bottom: 2rem;
      }
    }
    .capa-card-list {
      li {
        padding-top: 0.8rem;
        font-size: 1.3rem;
        width: 80%;
      }
    }
  }
`;

export default AboutCapabities;
