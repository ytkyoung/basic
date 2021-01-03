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
          <h2>{service.title}</h2>
          <p>{service.text}</p>
          <button>Learn more</button>
        </SlotNo1>
        <SlotNo2>
          <div className="box-box1">
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
          </div>
          <motion.div
            className="box-box2"
            whileHover={{ backgroundColor: '#b32a2a' }}
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
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`;

const SlotNo1 = styled.div`
  flex: 1 1 30%;
`;

const SlotNo2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1 1 70%;
  .wrapper {
    height: 70rem;
    overflow: hidden;
  }

  .box-box1 {
    background: #0cb8cf;
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
    border-left: 1px solid red;
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
