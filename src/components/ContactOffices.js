import styled from 'styled-components';
import ContactOfficesItem from '../components/ContactOfficesItem';
import data from '../data/offices.json';

const ContactOffices = () => {
  return (
    <SnapStyle>
      <div className="office-lists">
        {data.map((office, index) => (
          <ContactOfficesItem key={index} office={office} />
        ))}
      </div>
    </SnapStyle>
  );
};

const SnapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default ContactOffices;
