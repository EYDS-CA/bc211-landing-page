import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="home__header">
      <div className="home__header__container container">
        <div className="home__header__container__logo">
          <Link
            className="home__header__container__logo__title"
            title="bc211"
            to="http://www.bc211.ca"
          >
            bc211
          </Link>
        </div>
      </div>
    </div>

    <div className="home__content container">
      <h1 className="home__content__title">Safe Seniors, Strong Communities</h1>
      <p className="home__content__paragraph1">
        A program that matches seniors who need support with non-medical
        essentials, to volunteers in their community that are willing to help.
      </p>
      <p className="home__content__paragraph2">
        To register for services, or to offer help, please fill in this&nbsp;
        <Link
          className="home__content__paragraph2__link"
          to="https://forms.gle/V3yADFxST9Urp2pD7"
          target="_blank"
          rel="noopener noreferrer"
        >
          form
        </Link>
        .
      </p>
    </div>
  </div>
);

export default Home;
