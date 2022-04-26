import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const imgUrl = 'https://imdb-api.com/API/Posters/';
const apiBaseUrl = 'https://imdb-api.com/API/AdvancedSearch/';
const apiKey = 'k_ns4o5sjc';
const apiSearchUrl = `${apiBaseUrl}${apiKey}?title_type=feature`;
const apiGenresUrl = `${apiBaseUrl}${apiKey}?genres=action,adventure,comedy,drama,horror,thriller`;

function toObject(searchParams) {
  const res = {};
  searchParams.forEach((value, key) => {
    res[key] = value;
  });
  return res;
}

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [availableGenres, setAvailableGenres] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // console.log(`${apiSearchUrl}${searchParams}`);
    axios
      .get(`${apiSearchUrl}${searchParams}`)
      .then((res) => setResults(res.data.results));
  }, [searchParams]);
  console.log(results);

  useEffect(() => {
    axios.get(apiGenresUrl).then((res) => setAvailableGenres(res.data.genres));
  }, []);

  return (
    <div className="filter">
      <form>
        <select
          id="genre"
          value={searchParams.get('release_date') || ''}
          onChange={(e) => {
            setSearchParams({
              ...toObject(searchParams),
              release_date: e.target.value,
            });
          }}
        >
          <option key={''} value={''}>
            Year
          </option>
          {[
            2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
            2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
            2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990,
          ].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <br />
        <br />
        {availableGenres.length && (
          <select
            id="genre"
            value={searchParams.get('AdvancedSearchGenre') || ''}
            onChange={(e) => {
              setSearchParams({
                ...toObject(searchParams),
                AdvancedSearchGenre: e.target.value,
              });
            }}
          >
            <option key={''} value={''}>
              Category
            </option>
            {availableGenres.map((genres) => (
              <option key={genres.id} value={genres.id}>
                {genres.name}
              </option>
            ))}
          </select>
        )}
      </form>

      <div className="movielist">
        {results.map((movie) => (
          <div key={movie.id} className="moviecard">
            <h3>{movie.title}</h3>
            <p className="">{dayjs(movie.release_date).format('YYYY')}</p>
            <img
              width="100%"
              alt={`${movie.title} poster`}
              src={imgUrl + movie.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
