import styled from 'styled-components';
import data from '../data/services.json';
import WorkServicesBox from '../components/WorkServicesBox';

console.log(data);

const WorkServices = () => {
  return (
    <>
      <section className="services">
        <WorkBox>
          {data.services.map((service, index) => (
            <WorkServicesBox key={index} service={service} />
          ))}
        </WorkBox>
      </section>
    </>
  );
};

const WorkBox = styled.div`
  /* background-color: yellow; */
`;

export default WorkServices;
