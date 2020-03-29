import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

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
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '130px',
      height: '40px',
    },
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

const Header = () => {
  const classes = useStyles();

  const handleCTAClick = () => {
    ga('send', 'event', 'CTA click', 'click', 'Continue');
    window.location.href = 'http://www.bc211.ca/home';
  };

  return (
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
  );
};

export default Header;
