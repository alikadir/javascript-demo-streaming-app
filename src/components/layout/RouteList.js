import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../page/HomePage';
import NotFoundPage from '../page/NotFoundPage';
import MoviesPage from '../page/MoviesPage';
import SeriesPage from '../page/SeriesPage';

export default function RouteList(props) {
  return (
    <Switch>
      <Route path="/movies">
        <MoviesPage />
      </Route>
      <Route path="/series">
        <SeriesPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
