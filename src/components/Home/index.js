import React, { useState, useEffect } from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
// Components
import BannerImage from '../BannerImage';

// Hook
import { useHomeFetch } from '../../hooks/useHomeFetch';
// Image
import NoImage from '../../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return (
    <>
      {state.results[0] && state? (
        <BannerImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
          release_date={state.results[0].release_date}
          vote_count={state.results[0].vote_count}
          stars={state.results[0].vote_average}
        />
      ) : null}
      {state.results[1] ? (
        <BannerImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
          title={state.results[1].original_title}
          text={state.results[1].overview}
          release_date={state.results[1].release_date}
          vote_count={state.results[1].vote_count}
          stars={state.results[1].vote_average}
        />
      ) : null}
    </>
  );
};

export default Home;
