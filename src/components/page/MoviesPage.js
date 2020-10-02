import React, { useEffect, useState } from 'react';
import PageTitle from '../common/PageTitle';
import { getMovies } from '../../services/contentService';
import ErrorWidget from '../common/ErrorWidget';
import Loading from '../common/Loading';
import CardList from '../common/CardList';
import SearchWidget from '../common/SearchWidget';

export default function MoviesPage(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (() => {
      setIsLoading(true);
      getMovies()
        .then(data => setMovies(data))
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    })();
  }, []);

  return (
    <main>
      <PageTitle title="Popular Movies" />
      {error && <ErrorWidget error={error} />}
      {isLoading && <Loading />}
      <SearchWidget list={movies} />
      <CardList list={movies} />
    </main>
  );
}
