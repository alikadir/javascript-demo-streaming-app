import React, { useEffect, useState } from 'react';
import PageTitle from '../common/PageTitle';
import { getSeries } from '../../services/contentService';
import ErrorWidget from '../common/ErrorWidget';
import Loading from '../common/Loading';
import CardList from '../common/CardList';
import SearchWidget from '../common/SearchWidget';

export default function SeriesPage(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [series, setMovies] = useState([]);

  useEffect(() => {
    (() => {
      setIsLoading(true);
      getSeries()
        .then(data => setMovies(data))
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    })();
  }, []);

  return (
    <main>
      <PageTitle title="Popular Series" />
      {error && <ErrorWidget error={error} />}
      {isLoading && <Loading />}
      <SearchWidget list={series} />
      <CardList list={series} />
    </main>
  );
}
