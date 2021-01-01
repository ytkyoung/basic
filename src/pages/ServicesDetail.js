import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MovieState from '../data/test.json';
// import { MovieState } from '../movieState';

const ServicesDetail = () => {
  const history = useHistory();
  console.log(history);
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
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <h2>{movie.projects[1].mainImg}</h2>
            <img src={movie.projects[1].mainImg} alt="movie" />
          </Headline>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  background: red;
`;
const Headline = styled.div`
  background: blue;
`;

export default ServicesDetail;
