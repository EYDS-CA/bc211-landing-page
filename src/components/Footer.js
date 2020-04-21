import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import uWay from '@/assets/uway-canada-logo-horiz__cmyk.png';
import two11Logo from '@/assets/211-logo.png';


const useStyles = makeStyles(() => ({

  // Footer styles
  footerWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: '52px 0',
  },
  footer211Image: {
    cursor: 'pointer',
  },

  // Footer nav styles
  footerNavWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 0',
    backgroundColor: '#3F3E40',
    fontSize: '8pt',
    color: '#FFFFFF !important',
  },
  footerNavRow: {
    padding: '5px 0',
    margin: '0 0 5px',
    '& > a': {
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#FFFFFF !important',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  const handle211ImageClick = () => window.open('http://211.ca/', '_blank');

  return (
    <Fragment>

      {/** Footer */}
      <div className={classes.footerWrapper}>
        <Container maxWidth="md">
          <Grid container justify="center" alignItems="center" spacing={8}>
            <Grid item>
              <img
                className={classes.footer211Image}
                src={two11Logo}
                width="200"
                height="131"
                onClick={handle211ImageClick}
              />
            </Grid>
            <Grid item>
              <img
                src={uWay}
                width="326"
                height="97"
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/** Footer Nav */}
      <div className={classes.footerNavWrapper}>
        <Container maxWidth="sm">
          <Grid container justify="center" alignItems="center">
            <Grid className={classes.footerNavRow} item>
              <a href="http://www.bc211.ca/about/">About Us</a>
              &nbsp;|&nbsp;
              <a href="http://www.bc211.ca/our-funders/">Our Funders</a>
              &nbsp;|&nbsp;
              <a href="http://www.bc211.ca/blog/">Blog</a>
              &nbsp;|&nbsp;
              <a href="http://www.bc211.ca/contact/">Contact</a>
              &nbsp;|&nbsp;
              <a href="http://www.bc211.ca/terms-of-use-and-privacy/">Terms of Use and Privacy</a>
            </Grid>
            <Grid className={classes.footerNavRow} item>
              © bc211 2019
              &nbsp;|&nbsp;
              Vancouver BC
              &nbsp;|&nbsp;
              <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#098;&#099;&#050;&#049;&#049;&#046;&#099;&#097;">info@bc211.ca</a>
              &nbsp;|&nbsp;
              Admin: 604-875-6431
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

export default Footer;
