import styled from 'styled-components';
import AboutCapabilitiesItem from '../components/AboutCapabilitiesItem';
import data from '../data/capabilities.json';

const AboutCapabities = () => {
  return (
    <SnapStyle>
      <div className="capa-title">
        <h2>Agency Snapshot</h2>
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
  .capa-title {
    margin-top: 15rem;
    flex: 1 1 30%;
    background: red;
    h2 {
      width: 50%;
    }
  }
  .capa-lists {
    flex: 1 1 70%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .capa-card {
    flex: 1 1 50%;
    background: #66ff00;
    padding: 15rem 10rem 10rem 5rem;
    p {
      width: 80%;
    }
    li {
      padding-top: 1rem;
      font-size: 1.8rem;
      width: 80%;
    }
  }
`;

export default AboutCapabities;
