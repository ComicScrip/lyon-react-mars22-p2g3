import React, { useState } from 'react';
import '../Css/App.css';
import '../Css/Questionnaire.css';
import '../Css/Navbar.css';
import '../Css/index.css';
// import Question1 from '../components/Question1';
import { useSearchParams } from 'react-router-dom';

const MOVIES = ['Comedy', 'Action', 'Sci-Fi', 'Drama', 'Thriller', 'Horror'];
const YEARS = ['1980 - 2000', '2000 - 2015', '2015 - 2022'];

function toObject(searchParams) {
  const res = {};
  // eslint-disable-next-line no-return-assign
  searchParams.forEach((value, key) => (res[key] = value));
  return res;
}

function Questionary() {
  const [searchParams, setSearchParams] = useSearchParams();

  // const divStyle = {
  //   color: 'blue',
  // };
  const [isActif, setIsActif] = useState(false);
  const [count, setCount] = useState(1);
  const handleClick = (step, param) => {
    setIsActif(!isActif);
    setCount(count + 1);

    if (step === 'movie') {
      setSearchParams({
        ...toObject(searchParams),
        movie_category: param.toLowerCase(),
      });
    } else if (step === 'year') {
      setSearchParams({
        ...toObject(searchParams),
        year: param.toLowerCase(),
      });
    }
  };
  return (
    <div>
      <h1 className="question_title">QUESTIONS</h1>
      <div className="cercle">
        <span className="compteur"> {count}/2</span>
      </div>
      <h2 className="question">What kind of movies do you like ?</h2>
      <section className="section_card">
        <div className="cardsx">
          {MOVIES.map((movieCategoryTitle) => (
            <button
              type="submit"
              className="cardy"
              onClick={() => handleClick('movie', movieCategoryTitle)}
            >
              {movieCategoryTitle}
            </button>
          ))}
        </div>
      </section>
      {isActif && (
        <div>
          <h2 className="question">Which year ?</h2>
          <section className="section_card">
            <div className="cardsx">
              {YEARS.map((year) => (
                <button
                  type="submit"
                  className="cardy"
                  onClick={() => handleClick('year', year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
export default Questionary;
