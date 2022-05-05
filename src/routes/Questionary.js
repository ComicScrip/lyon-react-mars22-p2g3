import React, { useState } from 'react';
import '../Css/App.css';
import '../Css/Questionnaire.css';
import '../Css/Navbar.css';
import '../Css/index.css';
import { useNavigate } from 'react-router-dom';

const categories = [
  'Comedy',
  'Action',
  'Sci-Fi',
  'Drama',
  'Thriller',
  'Horror',
];

const years = [
  { minYear: 1980, maxYear: 1999 },
  { minYear: 2000, maxYear: 2010 },
  { minYear: 2011, maxYear: 2022 },
];

const awardmovie = [{ name: 'Oscar Winner', value: 'oscar_winners' }];

const formSteps = ['film_categories', 'film_years', 'film_award'].map(
  (step) => ({
    id: step,
  })
);

function Questionary() {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedYears, setSelectedYears] = useState(null);
  const navigate = useNavigate();
  console.log(selectedYears);
  return (
    <div>
      <h1 className="question_title">QUESTIONS</h1>
      <div className="cercle">
        <span className="compteur">{count}/3</span>
      </div>
      <h2 className="question">What kind of movies do you like ?</h2>
      <section className="section_card">
        <div className="cards">
          {categories.map((movieCategoryTitle) => (
            <button
              key={movieCategoryTitle}
              type="submit"
              className={`card ${
                selectedCategory === movieCategoryTitle ? 'selected' : ''
              }`}
              onClick={() => {
                setSelectedCategory(movieCategoryTitle);
                if (count < formSteps.length) {
                  setCount(count + 1);
                }
              }}
            >
              {movieCategoryTitle}
            </button>
          ))}
        </div>
      </section>
      {selectedCategory && (
        <div>
          <h2 className="question">Which release year ?</h2>
          <section className="section_card">
            <div className="cards">
              {years.map(({ minYear, maxYear }) => (
                <button
                  key={minYear}
                  type="submit"
                  className="card"
                  onClick={() => {
                    setSelectedYears({ minYear, maxYear });
                  }}
                >
                  {minYear} - {maxYear}
                </button>
              ))}
            </div>
          </section>
        </div>
      )}
      {selectedYears && (
        <div>
          <h2 className="question">Do you prefer a award-winning movie ?</h2>
          <section className="section_card">
            <div className="cards">
              {awardmovie.map((movieType) => (
                <button
                  key={movieType.value}
                  type="submit"
                  className="card"
                  onClick={() => {
                    navigate(
                      `/result?genres=${selectedCategory}&release_date=${selectedYears.minYear},${selectedYears.maxYear}&groups=${movieType.value}`,
                      {
                        replace: true,
                      }
                    );
                  }}
                >
                  {movieType.name}
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
