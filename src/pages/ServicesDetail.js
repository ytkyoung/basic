import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MovieState from '../data/test.json';
// import { MovieState } from '../movieState';
import ScrollTop from '../components/ScrollTop';
import Sec1 from '../components/Sec1';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ServicesDetail = () => {
  const history = useHistory();
  // console.log(history);
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    console.log(setMovies);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Headline>
            <div className="detail-title">
              <h1>{movie.title1}</h1>
            </div>
            <div className="detail-title2">
              <h2>{movie.title}</h2>
            </div>
            <div className="detail-box">
              <div className="detail-img">
                <img src={movie.pic} alt="movie" />
                <img src={movie.pic} alt="movie" />
                <img src={movie.pic} alt="movie" />
              </div>
            </div>
            <Sec1 sektion={movie.title1} />
            <div className="detail-text">
              <h2>{movie.description}</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                officia ducimus, ipsam expedita inventore consequuntur
                accusamus, repellendus officiis ipsum dolor nulla qui illo
                minima maiores tempore quia soluta placeat. Molestiae.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                voluptas rerum commodi. Quidem iusto velit temporibus odit at
                nihil, voluptate suscipit! Dolor debitis facilis, voluptate
                cupiditate beatae praesentium enim perspiciatis minima odio
                autem. Quidem quod velit architecto soluta explicabo ab quis
                officiis autem similique laborum debitis molestias, beatae
                delectus quo?
              </p>
            </div>
          </Headline>
          <ScrollTop />
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  /* background: red; */
`;
const Headline = styled.div`
  margin: 0 auto;
  padding: 0 5%;

  .detail-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 10vh;
    padding: 5%;
    h1 {
      font-size: 10rem;
    }
  }
  .detail-title2 {
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 1.3rem;
      padding-bottom: 3rem;
    }
  }
  .detail-box {
    display: flex;
  }
  .detail-img {
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    width: 100%;
    display: flex;
    padding-bottom: 3rem;
    img {
      width: 100%;
    }
    & img:nth-child(1) {
      scroll-snap-align: center;
      filter: hue-rotate(90deg);
    }
    & img:nth-child(2) {
      scroll-snap-align: center;
      filter: invert(20%);
    }
    & img:nth-child(3) {
      scroll-snap-align: center;
      filter: hue-rotate(180deg);
    }
  }
  .detail-text {
    width: 30%;
    padding-bottom: 6rem;
  }
  @media (max-width: 890px) {
    .detail-title {
      min-height: 10vh;
      padding: 0;
      h1 {
        font-size: 4rem;
      }
    }
    .detail-title2 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem;
    }
    .detail-img {
      overflow: hidden;
      width: 100%;

      display: flex;
      padding-bottom: 3rem;
      img {
        width: 100%;
      }
      & img:nth-child(1) {
        filter: hue-rotate(160deg);
      }
      & img:nth-child(2) {
        filter: invert(50%);
      }
      & img:nth-child(3) {
        filter: hue-rotate(0deg);
      }
    }
    .detail-text {
      width: 100%;
      padding-bottom: 6rem;
    }
  }
`;

export default ServicesDetail;
