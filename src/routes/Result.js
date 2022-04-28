import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import axios from 'axios';
import '../Css/Result.css';

function toObject(searchParams) {
  const res = {};
  searchParams.forEach((value, key) => {
    res[key] = value;
  });
  return res;
}

export default function Result() {
  const [searchParams, setSearchParams] = useSearchParams(2020);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/API/AdvancedSearch/k_46zywf07?${searchParams}`)
      .then((res) => res.data.results)
      .then((data) => {
        setResults(data);
      });
  }, [searchParams]);

  return (
    <>
      <h1 className="title-result">Result</h1>

      <form className="filters">
        <select
          className="genre"
          value={searchParams.get('release_date') || ''}
          onChange={(e) => {
            setSearchParams({
              ...toObject(searchParams),
              release_date: e.target.value,
            });
          }}
        >
          {' '}
          <option key={''} value={2022}>
            All
          </option>
          {[
            2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
            2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
            2000, 1999, 1998, 1997, 1996, 1995, 1996, 1995, 1994, 1993, 1992,
            1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981,
            1980,
          ].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          className="genre"
          value={searchParams.get('genres') || ''}
          onChange={(e) => {
            setSearchParams({
              ...toObject(searchParams),
              genres: e.target.value,
            });
          }}
        >
          <option key={''} value={''}>
            All
          </option>
          {['Action', 'Comedy', 'Horror'].map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </form>

      <Card movie={results} />
    </>
  );
}
