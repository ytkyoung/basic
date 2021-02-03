import styled from 'styled-components';

import { motion } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const ContactOfficesItem = (props) => {
  // console.log(props.office.id);
  // console.log(props.theme);
  // console.log('props.theme');
  const [element, controls] = useScroll();
  return (
    <OfficeStyle
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <SlotNo1>
        <h2>Office 0{props.office.id + 1}</h2>
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

const OfficeStyle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  /* border-top: 1px solid #252422; */
  &:last-child {
    border-bottom: none;
  }
`;

const SlotNo1 = styled.div`
  flex: 1 1 30%;
  align-self: flex-start;
`;

const SlotNo2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1 1 70%;

  border-left: 1px solid ${({ theme }) => theme.text};
  padding-bottom: 3rem;

  .wrapper {
    overflow: hidden;
  }

  .box-box1 {
    padding-left: 3rem;
    flex: 1 1 50%;
    img {
      width: 100%;
    }
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
  .office-date {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 890px) {
    flex-direction: column;
  }
  .office-date {
    h3 {
      font-size: 1.4rem;
      padding-bottom: 3rem;
    }
  }
  .office-title {
    h2 {
      font-size: 2rem;
    }
  }
`;

export default ContactOfficesItem;
