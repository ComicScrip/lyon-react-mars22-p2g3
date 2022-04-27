import React from 'react';

function Filters() {
  return (
    <div className="filters">
      <form>
        <select>
          {' '}
          <option key={''} value={''}>
            All
          </option>
          {[1990, 1980].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Filters;
