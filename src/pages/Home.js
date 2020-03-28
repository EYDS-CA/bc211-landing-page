import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import icon_register from '@/assets/icon_register.svg';
import icon_alert from '@/assets/icon_alert.svg';

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
  },

  // Header styles
  appBar: {
    backgroundColor: '#1B2229'
  },
  toolbar: {
    height: '125px',
  },
  headerLogoWrapper: {
    flexGrow: 1,
  },
  headerLogo: {
    width: '260px',
    height: '81px',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      width: '130px',
      height: '40px',
    },
  },

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

  // Footer styles
  footerWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    height: '210px',
  },

  // Footer nav styles
  footerNavWrapper: {
    backgroundColor: '#3F3E40',
    height: '95px',
  },
  footer211Image: {
    cursor: 'pointer',
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

  const handleCTAClick = () => window.location.href = 'http://www.bc211.ca';

  const handle211ImageClick = () => window.open('http://211.ca/', '_blank');

  return (
    <div className={classes.root}>

      {/** Header */}
      <AppBar className={classes.appBar} position="static">
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <div className={classes.headerLogoWrapper}>
              <img
                className={classes.headerLogo}
                src="http://www.bc211.ca/wp-content/uploads/2017/03/bc211_logo_small.png"
                onClick={handleCTAClick}
              />
            </div>
            <Button
              className={classes.ctaButton}
              variant="contained"
              onClick={handleCTAClick}
            >
              Continue to Main BC211 Homepage
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

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
                <img width="40" height="40" src={icon_register} />
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
                >
                  Click here to register now
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <img width="40" height="40" src={icon_alert} />
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
      <div className={classes.footerWrapper}>
        <Container maxWidth="md">
          <Grid container justify="center" alignItems="center" spacing={8}>
            <Grid item>
              <img
                className={classes.footer211Image}
                src="http://bc211.ca/wp-content/uploads/2014/10/211-logo.png"
                width="200"
                height="131"
                onClick={handle211ImageClick}
              />
            </Grid>
            <Grid item>
              <img
                src="http://bc211.ca/wp-content/uploads/2017/06/uway-canada-logo-horiz__cmyk.png"
                width="326"
                height="97"
              />
            </Grid>
          </Grid>


        </Container>
      </div>

      {/** Footer Nav */}
      <div className={classes.footerNavWrapper}>

      </div>

    </div>
  );
};

export default Home;
