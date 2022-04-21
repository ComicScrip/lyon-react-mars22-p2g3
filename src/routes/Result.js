import React from 'react';
import Filters from '../components/Filters';
import ResultAPI from '../components/ResultAPI';
import '../Css/Result.css';

function Result() {
  return (
    <>
      <h1 className="title-result">Result</h1>
      <Filters />
      <ResultAPI />
    </>
  );
}

export default Result;
