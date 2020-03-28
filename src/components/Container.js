import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: '125px',
    backgroundColor: '#1B2229'
  },
  title: {
    flexGrow: 1,
  },

  ctaButton: {
    backgroundColor: '#CE0026',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className="home">

      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title}>
            <a
              className="home__header__container__logo__title"
              title="bc211"
              href="http://www.bc211.ca"
            />
          </Typography>
          <Button
            className={classes.ctaButton}
            color="inherit"
            variant="contained"
          >
            Continue to Main BC211 Homepage
          </Button>
        </Toolbar>
      </AppBar>





      {/*<div className="home__header">*/}
      {/*  <div className="home__header__container container">*/}
      {/*    <div className="home__header__container__logo">*/}
      {/*      <a*/}
      {/*        className="home__header__container__logo__title"*/}
      {/*        title="bc211"*/}
      {/*        href="http://www.bc211.ca"*/}
      {/*      >*/}
      {/*        bc211*/}
      {/*      </a>*/}
      {/*    </div>*/}


      {/*    <Button color="primary">Hello World</Button>*/}

      {/*    <a className="home__header__container__link" href="http://www.bc211.ca/help-lines/">Continue to Main Site</a>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="home__content container">*/}
      {/*  <Panel*/}
      {/*    title="Register for new Safe Seniors Program"*/}
      {/*    icon="register"*/}
      {/*  >*/}
      {/*    test*/}
      {/*  </Panel>*/}
      {/*  <Panel*/}
      {/*    title="Coronavirus Outbreak Information"*/}
      {/*    icon="alert"*/}
      {/*  >*/}
      {/*    test*/}
      {/*  </Panel>*/}
      {/*  <h1 className="home__content__title">Safe Seniors, Strong Communities</h1>*/}
      {/*  <p className="home__content__paragraph1">*/}
      {/*    A program that matches seniors who need support with non-medical*/}
      {/*    essentials, to volunteers in their community that are willing to help.*/}
      {/*  </p>*/}
      {/*  <p className="home__content__paragraph2">*/}
      {/*    To register for services, or to offer help, please fill in this&nbsp;*/}
      {/*    <a*/}
      {/*      className="home__content__paragraph2__link"*/}
      {/*      href="https://forms.gle/V3yADFxST9Urp2pD7"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      form*/}
      {/*    </a>*/}
      {/*    .*/}
      {/*  </p>*/}
      {/*</div>*/}
    </div>
  );
};

export default Home;
