import styled from 'styled-components';

const ContactOfficesItem = (props) => {
  return (
    <OfficeStyle>
      <SlotNo1>
        <h2>Office</h2>
      </SlotNo1>
      <SlotNo2>
        <div className="box-box1">
          <div className="office-img">
            <img src={props.office.img} alt="office" />
          </div>

          <div className="office-date">
            <h3>{props.office.officeNo}</h3>
            <h3>/03</h3>
          </div>
        </div>
        <div className="box-box2">
          <div className="office-title">
            <h2>{props.office.title}</h2>
          </div>
        </div>
      </SlotNo2>
    </OfficeStyle>
  );
};

const OfficeStyle = styled.div`
  background: magenta;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`;

const SlotNo1 = styled.div`
  flex: 1 1 30%;
  background: green;
`;

const SlotNo2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1 1 70%;
  background: #002d80;
  .wrapper {
    height: 70rem;
    overflow: hidden;
  }

  .box-box1 {
    background: #0cb8cf;
    /* padding-left: 3rem; */
    flex: 1 1 50%;
    img {
      width: 100%;
    }
    border-left: 1px solid red;
  }
  .box-box2 {
    padding-left: 3rem;
    flex: 1 1 50%;
    overflow: hidden;
    img {
      object-fit: cover;
      transform: scale(1.1);
      transition: transform 0.5s, filter 1.5s ease-in-out;
      filter: grayscale(50%);
    }
    &:hover img {
      filter: grayscale(0);
      transform: scale(1);
    }
  }
`;

export default ContactOfficesItem;
