import css from './Filter.module.css';

import React from 'react';
import PropTypes from 'prop-types';

function Filter({ filter, onFilterChange }) {
  return (
    <div>
      <label className={css.wrap}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css.input}
          value={filter}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
