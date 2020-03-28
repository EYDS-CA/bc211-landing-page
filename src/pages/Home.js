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

const useStyles = makeStyles(() => ({

  root: {
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
    background: 'transparent url(http://www.bc211.ca/wp-content/uploads/2017/03/bc211_logo_small.png) no-repeat 0 100%',
    width: '260px',
    height: '81px',
    display: 'block',
  },

  // Hero styles
  heroWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '32px',
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
  },
  heroTextRed: {
    color: '#CE0026',
  },

  // Card styles
  card: {
    height: '100%',
    textAlign: 'center',
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

  // Util styles
  ctaButton: {
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

  return (
    <div className={classes.root}>

      {/** Header */}
      <AppBar className={classes.appBar} position="static">
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <div className={classes.headerLogoWrapper}>
              <a
                className={classes.headerLogo}
                href="http://www.bc211.ca"
              />
            </div>
            <Button
              className={classes.ctaButton}
              color="inherit"
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
      <Container maxWidth="lg">
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
    </div>
  );
};

export default Home;
