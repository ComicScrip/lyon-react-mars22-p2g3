import React from 'react';
import Card from '../components/Card';
import Filters from '../components/Filters';
import '../Css/Result.css';

function Result() {
  return (
    <>
      <h1 className="title-page">Result</h1>
      <Filters />
      <Card />
    </>
  );
}

export default Result;
