import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import IconRegister from '@/assets/icon_register.svg';
import IconAlert from '@/assets/icon_alert.svg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const useStyles = makeStyles((theme) => ({

  // Hero styles
  heroWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '190px',
    width: '100%',
    background: 'url(http://www.bc211.ca/wp-content/uploads/2014/10/181144228-1.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  heroText: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '25px',
    backgroundColor: '#FFFFFF',
    padding: '25px 70px 25px 45px',
    [theme.breakpoints.down('sm')]: {
      padding: '17px 35px 17px 22px',
      fontSize: '20px',
    },
  },
  heroTextRed: {
    color: '#CE0026',
  },

  // Card styles
  cardsWrapper: {
    marginTop: '32px',
    marginBottom: '34px',
  },
  card: {
    height: '100%',
    textAlign: 'center',
    borderWidth: '3px',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '32px',
    color: '#3C6787',
  },
  cardContent: {
    fontSize: '15px',
    lineHeight: '25px',
  },
  cardActions: {
    justifyContent: 'center',
    paddingBottom: '24px',
    paddingTop: '0',
  },

  // CTA styles
  ctaWrapper: {
    marginBottom: '56px',
  },

  // Util styles
  ctaButton: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#CE0026',
    '&:hover': {
      backgroundColor: '#CE0026',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleCTAClick = () => {
    gtag('event', 'Click', { event_category: 'CTA', event_label: 'Continue' });
    window.location.href = 'http://www.bc211.ca/home';
  };

  const handleRegisterClick = () => {
    gtag('event', 'Click', { event_category: 'CTA', event_label: 'Register' });
    window.open('https://forms.gle/ctx4rxiUtxUivEkn8', '_blank');
  };

  const handleLearnMoreClick = () => {
    gtag('event', 'Click', { event_category: 'CTA', event_label: 'Coronavirus' });
    history.push('/coronavirus-2019-outbreak');
  };

  return (
    <div>

      {/** Header */}
      <Header />

      {/** Hero */}
      <div className={classes.heroWrapper}>
        <div className={classes.heroText}>
          <span>Welcome to&nbsp;</span>
          <span className={classes.heroTextRed}>bc211</span>
        </div>
      </div>

      {/** Cards */}
      <Container className={classes.cardsWrapper} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <img width="40" height="40" src={IconRegister} />
                <Typography className={classes.cardTitle}>
                  Register for NEW Safe Seniors, Strong Communities Program
                </Typography>
                <Typography className={classes.cardContent}>
                  A program that matches seniors who need support with non-medical essentials,
                  to volunteers in their community who are willing to help.
                  <br />
                  To register for services, or to offer help, register.
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  className={classes.ctaButton}
                  color="inherit"
                  variant="contained"
                  onClick={handleRegisterClick}
                >
                  Click here to register now
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <img width="40" height="40" src={IconAlert} />
                <Typography className={classes.cardTitle}>
                  Coronavirus Outbreak Information
                </Typography>
                <Typography className={classes.cardContent}>
                  As of March 18, 2020, the Province of British Columbia has
                  declared a state of emergency to support response to COVID-19.
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  className={classes.ctaButton}
                  color="inherit"
                  variant="contained"
                  onClick={handleLearnMoreClick}
                >
                  Learn more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/** CTA */}
      <Container className={classes.ctaWrapper} maxWidth="sm">
        <Grid container justify="center">
          <Grid item>
            <Button
              className={classes.ctaButton}
              variant="contained"
              onClick={handleCTAClick}
            >
              Continue to Main BC211 Homepage
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/** Footer */}
      <Footer />
    </div>
  );
};

export default Home;
