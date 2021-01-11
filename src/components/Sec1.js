import styled from 'styled-components';

const ContactSec1 = ({ sektion }) => {
  return (
    <SecStyle>
      <div className="sec1">
        <h4>SEC.</h4>
      </div>
      <div className="sec2">
        <h4>{sektion}</h4>
        <h4>●</h4>
      </div>
    </SecStyle>
  );
};

const SecStyle = styled.section`
  padding: 2rem 0rem;
  margin-bottom: 5rem;
  border-top: 1px solid ${({ theme }) => theme.text};
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .sec1 {
    flex: 1 1 30%;
  }
  .sec2 {
    flex: 1 1 70%;
    display: flex;
    justify-content: space-between;
  }
`;

export default ContactSec1;
