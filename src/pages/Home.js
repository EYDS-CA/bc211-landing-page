import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';

import IconRegister from '@/assets/icon_register.svg';
import heroWrapper from '@/assets/181144228-1.jpg';
import IconAlert from '@/assets/icon_alert.svg';
import IconPhone from '@/assets/icon_phone.svg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const useStyles = makeStyles((theme) => ({

  // Hero styles
  heroWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '190px',
    width: '100%',
    background: `url(${heroWrapper})`,
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
    '& a': {
      color: '#3c6787',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
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
    window.location.href = 'http://www.bc211.ca/coronavirus-2019-outbreak';
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
                <img width="40" height="40" src={IconPhone}/>
                <Typography className={classes.cardTitle}>
                2-1-1 Help Starts Here 
                </Typography>
                <Typography className={classes.cardContent}>
                  Life isn&apos;t always easy, but finding help can be. 211 connects you to programs and services in your community.
                  <br />
                  Free | Confidential | 24/7 | 150+ languages
                  <br />
                  Dial | Text | Chat
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  className={classes.ctaButton}
                  color="inherit"
                  variant="contained"
                  onClick={handleCTAClick}
                >
                  Search 211 Resources Online
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <img width="40" height="40" src={IconRegister}/>
                <Typography className={classes.cardTitle}>
                  Register for Safe Seniors, Strong Communities Program
                </Typography>
                <Typography className={classes.cardContent}>
                  A program that matches seniors who need support with non-medical essentials, to volunteers in their community who are willing to help.
                  <br />
                  When you register as a senior or a volunteer, your contact information is shared with the United Way&apos;s Better at Home agencies. Those agencies make the connections between seniors and volunteers in the community.
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
        </Grid>
      </Container>

      {!isMobile && <Container className={classes.ctaWrapper} maxWidth="sm">
        <Grid container justify="center">
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <img width="40" height="40" src={IconAlert}/>
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
      </Container>}

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
