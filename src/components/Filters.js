import React from 'react';

function Filters() {
  return (
    <div>
      <div className="filter">
        <select name="genre" id="genre">
          <option>CATEGORY</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
          <option value="thriller">Thriller</option>
          <option value="drama">Drama</option>
        </select>

        <select name="genre" id="genre">
          <option>YEAR</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
