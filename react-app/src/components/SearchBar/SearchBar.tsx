import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { searchItems } from '../../store/items';
import SearchResult from './SearchResult';
import './SearchBar.css';

interface SearchBarProps {
  inventory: boolean
}
export default function SearchBar({ inventory }: SearchBarProps) {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const results = useAppSelector((state) => state.items.results);
  // TODO: Refactor search delay to remove return statement
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    async function handleSearch() {
      await dispatch(searchItems(query));
      setShowMenu(true);
    }
    let timeout: NodeJS.Timeout;
    if (query) {
      timeout = setTimeout(handleSearch, 500);
    }
    return () => clearTimeout(timeout);
  }, [query, dispatch]);
  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setTimeout(() => {
      if (event.target.value === '') setShowMenu(false);
    }, 1000);
  };
  const hideMenu = () => {
    setQuery('');
    setShowMenu(false);
  };

  return (
    <div className="searchBar">
      <input placeholder="Add an Item" value={query} onChange={handleQuery} />
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
