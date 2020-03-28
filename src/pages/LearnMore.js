import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const useStyles = makeStyles(() => ({
  contentWrapper: {
    paddingTop: '90px',
    paddingBottom: '50px',
  },
  title: {
    color: '#3C6787',
    fontSize: '1.833em',
    margin: '15px 0 2px',
    paddingBottom: '2px',
    fontWeight: 'bold',
  },
  description: {
    color: '#333333',
    lineHeight: 1.7,
    fontSize: '15px',
    '& > a': {
      color: '#3c6787',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
  },
}));

const LearnMore = () => {
  const classes = useStyles();

  return (
    <div>

      {/** Header */}
      <Header />

      {/** Content */}
      <Container className={classes.contentWrapper} maxWidth="lg">

        {/* Section #1 */}
        <Typography component="h1" className={classes.title}>
          Information about the Coronavirus
        </Typography>
        <Typography className={classes.description}>
          As of March 18, 2020, the Province of British Columbia has declared a
          state of emergency to support response to COVID-19. The priority is to
          protect British Columbians and ensure that the province is best
          positioned to effectively respond to the pandemic.
          <a href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support">
            &nbsp;See Provincial COVID-19 News&nbsp;
          </a>
          for daily updates from Government and the Provincial
          Health Officer or download the
          <a href="https://bc.thrive.health/">
            &nbsp;COVID-19 BC Support App&nbsp;
          </a>
          for news and
          alerts. As of <strong>March 25, 2020</strong> at 12 midnight, the Government of Canada
          is enforcing the Quarantine Act, meaning that all travelers to Canada
          must enter a mandatory 14-day quarantine. This excludes those deemed
          essential workers.
        </Typography>

      </Container>

      {/** Footer */}
      <Footer />
    </div>
  );
};

export default LearnMore;
