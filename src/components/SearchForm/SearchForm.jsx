import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSerchQuery] = useState('');

  const handleChange = e => {
    setSerchQuery(e.currentTarget.value.trim().toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSerchQuery('');
  };

  // console.log('searchQuery from 'SearchForm':',searchQuery);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movie..."
          onChange={handleChange}
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
