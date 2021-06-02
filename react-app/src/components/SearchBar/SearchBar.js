import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { searchItems } from '../../store/items';
import SearchResult from './SearchResult';
import './SearchBar.css';

export default function SearchBar({ inventory }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const results = useSelector((state) => state.items.results);
  useEffect(() => {
    async function handleSearch() {
      await dispatch(searchItems(query));
      setShowMenu(true);
    }
    if (query) {
      const timeout = setTimeout(handleSearch, 500);
      clearTimeout(timeout);
    }
  }, [query, dispatch]);
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const hideMenu = () => {
    setQuery('');
    setShowMenu(false);
  };

  return (
    <div className="searchBar">
      <input placeholder="Add an Item" onChange={handleQuery} />
      {results && showMenu
        && (
        <ul className="searchResults">
          {results && results.map((result) => (
            <SearchResult
              key={result.id}
              item={result}
              inventory={inventory}
              hideMenu={hideMenu}
            />
          ))}
        </ul>
        )}
    </div>
  );
}

SearchBar.propTypes = {
  inventory: PropTypes.bool.isRequired,
};
