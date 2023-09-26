import React, { useState } from 'react';
import './Searchbar.styled';
import { SearchFormInput, SearchForm, SearchButton } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === ""){
      return alert ("Please, enter search parameters");
    }
    onSubmit(query);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default Searchbar;
