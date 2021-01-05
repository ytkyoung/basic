import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

class WorkServiceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { service: props.service };
    console.log(this.state.service.projects[0].video);
  }

  render() {
    const service = this.state.service;
    return (
      <Huhu>
        <SlotNo1>
          <h3>{service.date}</h3>
          <div className="learn">
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <button>Learn more</button>
          </div>
        </SlotNo1>
        <SlotNo2>
          <motion.div
            className="box-box1"
            whileHover={{ backgroundColor: 'rgba(37, 36, 34, 0.03)' }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <div className="wrapper">
              {service.projects[0].video ? (
                <video className="videoTag" autoPlay loop muted>
                  <source
                    src={service.projects[0].mainVideo}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <Link to={service.url}>
                  <img src={service.projects[0].mainImg} alt="" />
                </Link>
              )}
            </div>

            <h3>{service.projects[0].title}</h3>
            <p>{service.projects[0].description}</p>
          </motion.div>
          <motion.div
            className="box-box2"
            whileHover={{ backgroundColor: 'rgba(37, 36, 34, 0.03)' }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <div className="wrapper">
              <Link to={service.url}>
                <img src={service.projects[1].mainImg} alt="" />
              </Link>
            </div>
            <h3>{service.projects[1].title}</h3>
            <p>{service.projects[1].description}</p>
          </motion.div>
        </SlotNo2>
      </Huhu>
    );
  }
}

const Huhu = styled.div`
  display: flex;
  padding: 3rem 0rem;
  border-top: 0.1rem solid #252422;
  &:last-child {
    border-bottom: 0.1rem solid #252422;
    margin-bottom: 6rem;
  }
`;

const SlotNo1 = styled.div`
  flex: 1 1 30%;
  padding: 0rem 2rem 2rem 0rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .learn {
    margin-bottom: 50%;
  }
`;

const SlotNo2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1 1 70%;
  h3 {
    padding-top: 2rem;
  }
  p {
    padding-right: 2rem;
    width: 60%;
    font-family: var(--font-medium);
  }
  .wrapper {
    overflow: hidden;
  }

  .box-box1 {
    padding-left: 3rem;
    flex: 1 1 50%;
    video {
      width: 100%;
      object-fit: cover;
      transform: scale(1.1);
      transition: transform 0.5s;
      &:hover {
        transform: scale(1);
      }
    }
    img {
      width: 100%;
      object-fit: cover;
      transform: scale(1.1);
      transition: transform 0.5s, filter 1.5s ease-in-out;
      filter: grayscale(50%);
    }
    &:hover img {
      filter: grayscale(0);
      transform: scale(1);
    }
    border-left: 1px solid #252422;
  }
  .box-box2 {
    padding-left: 3rem;
    flex: 1 1 50%;
    overflow: hidden;
    img {
      width: 100%;
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

export default WorkServiceBox;