import React from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from './../../config';
// Components
import BannerImage from './BannerImage';
import Grid from './../Common/Grid';
import Thumbnail from './../Common/Thumbnail';
import Spinner from './../Common/Spinner'
import Button from './../Common/Button';
import Searchbar from './SearchBar';

// Hook
import { useHomeFetch } from './../../hooks/useHomeFetch';
// Image
import NoImage from '../../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadinMore } = useHomeFetch();

  if(error) return(<div>Something Went Wrong ...</div>)

  return (
    <>
      {!searchTerm && state.results[0] && state? (
        <BannerImage
          clickable={true}
          movieId={state.results[0].id}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
          release_date={state.results[0].release_date}
          vote_count={state.results[0].vote_count}
          stars={state.results[0].vote_average}
        />
      ) : null}
      {!searchTerm && state.results[1] ? (
        <BannerImage
          clickable={true}
          movieId={state.results[1].id}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
          title={state.results[1].original_title}
          text={state.results[1].overview}
          release_date={state.results[1].release_date}
          vote_count={state.results[1].vote_count}
          stars={state.results[1].vote_average}
        />
      ) : null}
      <Searchbar setSearchTerm={setSearchTerm}/>
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map(
          movie => (
          <Thumbnail key={movie.id}
            clickable={true}
            image={
              movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`: NoImage
            }
            movieId={movie.id}
          />
          ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadinMore(true)}/>
      )}

    </>
  );
};

export default Home;
