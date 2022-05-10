import React, { useRef, useState } from 'react';
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
  { name: '1980 - 2000', value: '1980,2000' },
  { name: '2000 - 2010', value: '2000,2010' },
  { name: '2010 - 2022', value: '2010,2022' },
];

const awardmovie = [
  { name: 'Oscar Winners', value: 'oscar_winners' },
  { name: 'All movies', value: '' },
];

const countries = [
  { name: 'France', value: 'fr' },
  { name: 'USA', value: 'us' },
  { name: 'UK', value: 'gb' },
];

const formSteps = [
  'film_categories',
  'film_years',
  'film_award',
  'film_country',
].map((step) => ({
  id: step,
}));

function Questionary() {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedYears, setSelectedYears] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const bottomPage = useRef();

  function toBottomPage() {
    setTimeout(() => {
      bottomPage.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 300);
  }

  return (
    <>
      <div>
        <h1 className="question_title">QUESTIONS</h1>
        <div className="cercle">
          <span className="compteur">{count}/4</span>
        </div>
        <h2 className="question">What kind of movies do you like ?</h2>
        <section className="section_card" id="section1">
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
                  toBottomPage();
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
            <section className="section_card" id="section1">
              <div className="cards">
                {years.map((year) => (
                  <button
                    key={year.value}
                    type="submit"
                    className={`card ${
                      selectedYears === year ? 'selected' : ''
                    }`}
                    onClick={() => {
                      setSelectedYears(year);
                      if (count < formSteps.length) {
                        setCount(count + 1);
                      }
                      toBottomPage();
                    }}
                  >
                    {year.name}
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
                    className={`card ${
                      selectedType === movieType ? 'selected' : ''
                    }`}
                    onClick={() => {
                      setSelectedType(movieType);
                      if (count < formSteps.length) {
                        setCount(count + 1);
                      }
                      toBottomPage();
                    }}
                  >
                    {movieType.name}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
        {selectedType && (
          <div>
            <h2 className="question">A movie from which country ?</h2>
            <section className="section_card">
              <div className="cards">
                {countries.map((country) => (
                  <button
                    key={country.value}
                    type="submit"
                    className="card"
                    onClick={() => {
                      navigate(
                        `/result?genres=${selectedCategory}&release_date=${selectedYears.value}&groups=${selectedType.value}&countries=${country.value}`,
                        {
                          replace: true,
                        }
                      );
                      if (count < formSteps.length) {
                        setCount(count + 1);
                      }
                      toBottomPage();
                    }}
                  >
                    {country.name}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
      <span ref={bottomPage} />
    </>
  );
}

export default Questionary;
