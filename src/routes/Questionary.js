/* eslint-disable import/no-duplicates */
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
const years = ['1980,1999', '2000,2010', '2011,2022'];

function Questionary() {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedYears, setSelectedYears] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="question_title">QUESTIONS</h1>
      <div className="cercle">
        <span className="compteur">{count}/2</span>
      </div>
      <h2 className="question">What kind of movies do you like ?</h2>
      <section className="section_card">
        <div className="cardsx">
          {categories.map((movieCategoryTitle) => (
            <button
              type="submit"
              className="cardy"
              onClick={() => {
                setSelectedCategory(movieCategoryTitle);
                setCount(count + 1);
              }}
            >
              {movieCategoryTitle}
            </button>
          ))}
        </div>
      </section>
      {selectedCategory && (
        <div>
          <h2 className="question">Which year ?</h2>
          <section className="section_card">
            <div className="cardsx">
              {years.map((year) => {
                const yearToDisplay = year;
                console.log(yearToDisplay);
                return (
                  <button
                    type="submit"
                    className="cardy"
                    onClick={() => {
                      // setSelectedYears(year);
                      navigate(
                        `/result?genres=${selectedCategory}&release_date=${year}`,
                        {
                          replace: true,
                        }
                      );
                    }}
                  >
                    {yearToDisplay}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
export default Questionary;
