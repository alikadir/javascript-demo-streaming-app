import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';

const SearchWidget = props => {
  const [searchedList, setSearchedList] = useState([]);
  const search = e => {
    const searchedWord = e.target.value;
    if (searchedWord === '') setSearchedList([]);
    else {
      const list = props.list.filter(
        f => f.title.search(new RegExp(searchedWord, 'i')) !== -1
      );
      setSearchedList([...list]);
    }
  };

  return (
    props.list.length > 0 && (
      <div
        className={
          searchedList.length > 0
            ? 'search-widget-wrapper search-widget-line'
            : 'search-widget-wrapper'
        }>
        <input
          type="text"
          placeholder="Search"
          onChange={search}
          className="search-widget-input"
        />
        <CardList list={searchedList} />
      </div>
    )
  );
};

SearchWidget.propTypes = {
  list: PropTypes.array.isRequired,
};

export default SearchWidget;
