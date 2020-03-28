import React from "react";
import Panel from "@/components/Panel";

const Home = () => (
  <div className="home">
    <div className="home__header">
      <div className="home__header__container container">
        <div className="home__header__container__logo">
          <a
            className="home__header__container__logo__title"
            title="bc211"
            href="http://www.bc211.ca"
          >
            bc211
          </a>
        </div>
      </div>
    </div>

    <div className="home__content container">
      <Panel
        title="Register for new Safe Seniors Program"
        icon="register"
      >
        test
      </Panel>
      <Panel
        title="Coronavirus Outbreak Information"
        icon="alert"
      >
        test
      </Panel>
      <h1 className="home__content__title">Safe Seniors, Strong Communities</h1>
      <p className="home__content__paragraph1">
        A program that matches seniors who need support with non-medical
        essentials, to volunteers in their community that are willing to help.
      </p>
      <p className="home__content__paragraph2">
        To register for services, or to offer help, please fill in this&nbsp;
        <a
          className="home__content__paragraph2__link"
          href="https://forms.gle/V3yADFxST9Urp2pD7"
          target="_blank"
          rel="noopener noreferrer"
        >
          form
        </a>
        .
      </p>
    </div>
  </div>
);

export default Home;
