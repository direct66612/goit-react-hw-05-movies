import { useState } from 'react';
import Form from './SearchForm.styled';
const SearchFrom = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    if (!e.target.value) {
    }
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit(query);
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <input
        className="form__input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        value={query}
      />
      <button className="form__btn" type="submit">
        <span>Search</span>
      </button>
    </Form>
  );
};
export default SearchFrom;
