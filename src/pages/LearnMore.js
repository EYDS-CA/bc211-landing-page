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
    '& > ul': {
      margin: '0',
    },
    '& a': {
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
      <Container className={classes.contentWrapper} maxWidth="md">

        {/* Section #1 */}
        <Typography component="h1" className={classes.title}>
          Information about the Coronavirus
        </Typography>
        <Typography className={classes.description}>
          The Province of British Columbia has declared a
          state of emergency to support response to COVID-19. This state of
          emergency has been extended until at least April 14, 2020.
          <a href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support" target="_blank" rel="noopener noreferrer">
            &nbsp;See Provincial COVID-19 News&nbsp;
          </a>
          for daily updates from Government and the Provincial
          Health Officer or download the
          <a href="https://bc.thrive.health/" target="_blank" rel="noopener noreferrer">
            &nbsp;COVID-19 BC Support App&nbsp;
          </a>
          for news and
          alerts. As of <strong>March 25, 2020</strong> at 12 midnight, the Government of Canada
          is enforcing the Quarantine Act, meaning that all travelers to Canada
          must enter a mandatory 14-day quarantine. This excludes those deemed
          essential workers.
        </Typography>

        {/* Section #2 */}
        <Typography component="h1" className={classes.title}>
          Province-wide Phone Lines
        </Typography>
        <Typography className={classes.description}>
          <a href="https://www.healthlinkbc.ca/" target="_blank" rel="noopener noreferrer">
            HealthLink BC&nbsp;
          </a>
          is playing a significant role in supporting the public and has a FAQ about the coronavirus. If you have
          questions you can call <strong>811</strong> toll-free in BC, or for the deaf and hard of hearing, call 7-1-1.
          Translation services are available in more than 130 languages. Ministry of
          Health has created a phone service to provide <strong>non-medical</strong> information about COVID-19,
          including the latest information on travel recommendations and social distancing. Information is available
          in more than 110 languages, 7:30 am – 8 pm daily.
          <ul><li><strong>BC Coronavirus Information Line: 1-888-COVID19 (1-888-268-4319) or via text message at 604-630-0300</strong></li></ul>
          The
          <a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html" target="_blank" rel="noopener noreferrer">
            &nbsp;Public Health Agency of Canada/ Agence de la santé publique du Canada&nbsp;
          </a>
          has information for individuals, health professionals, travel advice as well as the current situation in
          Canada. A new national toll-free information line is providing up-to-date information on COVID-19.
          Interpretation service is available in multiple languages, 7 am to 12 am daily.
          <ul><li><strong>Coronavirus (COVID-19) Information Service: 1-833-784-4397</strong></li></ul>
        </Typography>

        {/* Section #3 */}
        <Typography component="h1" className={classes.title}>
          Testing/Assessment
        </Typography>
        <Typography className={classes.description}>
          BC Ministry of Health also offers the
          <a href="https://covid19.thrive.health/" target="_blank" rel="noopener noreferrer">
            &nbsp;BC COVID-19 Symptom Self-Assessment Tool&nbsp;
          </a>
          which will help determine if
          you may need further assessment or testing for COVID-19.   Testing can be done at Urgent and Primary Care
          Centres. Some primary care doctors may do testing; call first to check, and to allow them to prepare for you.
          Do not go to hospital emergency departments just for testing, only if you are having severe symptoms that
          require immediate medical assistance.
          <a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19" target="_blank" rel="noopener noreferrer">
            &nbsp;The BC Centre for Disease Control&nbsp;
          </a>
          has further information about the virus for individuals as wells as schools. Information is available in
          Chinese and Punjabi. Patients can also call a new dedicated hotline to receive testing results, 8:30 am to
          4:30 pm daily. People are asked to wait at least 72 hours after being tested before calling.
          <ul><li><strong>BCCDC Coronavirus Hotline: 1-833-707-2792</strong></li></ul>
        </Typography>

        {/* Section #4 */}
        <Typography component="h1" className={classes.title}>
          Financial Assistance
        </Typography>
        <Typography className={classes.description}>
          The
          <a href="https://www.canada.ca/en/department-finance/economic-response-plan.html" target="_blank" rel="noopener noreferrer">
            &nbsp;Department of Finance Canada&nbsp;
          </a>
          announced new economic measures to support Canadian workers and businesses
          during this time of uncertainty. For Canadians without paid sick leave (or similar workplace accommodation)
          who are sick, quarantined, or forced to stay home to care for children, the Government is:
          <ul>
            <li>
              Waiving the one-week waiting period for those individuals in imposed quarantine that claim Employment
              Insurance (EI) sickness benefits. This temporary measure is in effect as of March 15, 2020.
            </li>
            <li>
              Waiving the requirement to provide a medical certificate to access EI.
            </li>
            Contact the dedicated toll-free number if in quarantine and seeking to waive the waiting period: 1-833-381-2725, 1-800-529-3742 (TTY).
            <br />
            Individuals can also register for EI sickness benefits through the
            <a href="https://www.canada.ca/en/services/benefits/ei/ei-sickness/apply.html" target="_blank" rel="noopener noreferrer">
              &nbsp;online application.&nbsp;
            </a>
          </ul>
          <strong>Canada Emergency Support Response Benefit (CERB)</strong> (applications open April 6, 2020) will provide
          a taxable benefit of $2000 a month (paid in $500 per week installments) for up to four months to:
          <ul>
            <li>
              Individuals residing in Canada, who are at least 15 years old
            </li>
            <li>
              Workers who must stop working due to COVID-19 (sickness, quarantine, or are taking care of someone who is sick) or are eligible for EI regular or sickness benefits
            </li>
            <li>
              Workers who are or expect to be without employment or self-employment income for at least 14 consecutive days in the initial four-week period
            </li>
            <li>
              Who had income of at least $5,000 in 2019 or in the twelve months prior to the date of their application
            </li>
            <li>
              Application details will be available through
              <a href="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html" target="_blank" rel="noopener noreferrer">
                &nbsp;My CRA&nbsp;
              </a>
              and
              <a href="https://www.canada.ca/en/employment-social-development/services/my-account.html" target="_blank" rel="noopener noreferrer">
                &nbsp;My Service Canada&nbsp;
              </a>
              There is no waiting period; direct deposit payments will be made within three business days and cheques within 10 days to eligible applicants
            </li>
          </ul>
          <strong>Goods and Services Tax Credit (GSTC)</strong>(proposed for early May) will provide a one-time special
          payment which will double the maximum annual GSTC payment amounts for the 2019–20 benefit year. The average
          boost to income for those benefitting from this measure will be close to $400 for single individuals and
          close to $600 for couples. For families receiving the <strong>Canada Child Benefit (CCB),</strong> the
          government is increasing maximum annual payment amounts for the 2019–20 benefit year by $300 per
          child. The overall increase for families receiving CCB will be approximately $550 on average; families will
          receive an extra $300 per child as part of their May payment. The Province of BC has also announced several
          financial supports:   The <strong>BC Emergency Benefit for Workers</strong> will provide a one-time, tax-free $1000 payment
          to workers who have lost income due to COVID-19. BC residents who receive federal EI, or the new federal
          Emergency Care Benefit are eligible. Applications will open early April 2020. Payment will be made in May 2020.
          Increasing and expanding the <strong>BC Climate Action Tax Credit</strong> for moderate to low-income families in July 2020.
          Eligible adults will receive up to $218 (increased from $174) and children will receive $64 (increased from $51).
        </Typography>

        {/* Section #5 */}
        <Typography component="h1" className={classes.title}>
          BC Temporary Rental Supplement:
        </Typography>
        <Typography className={classes.description}>
          <ul>
            <li>
              A new rental supplement administered by BC Housing for renters with low to moderate incomes who have experienced income loss or reduction as a result of the COVID-19 pandemic. Offers up to $500 for up to three months, paid directly to landlords (application available mid-April)
            </li>
            <li>
              Halting evictions, including the enforcement of existing eviction notices
            </li>
            <li>
              Freezing new annual rent increases during the state of emergency
            </li>
            <li>
              Preventing landlords from accessing rental units without the consent of the tenants, except in exceptional cases
            </li>
            <li>
              Allowing landlords to restrict the use of common areas by tenants or guests
            </li>
          </ul>
        </Typography>

        {/* Section #6 */}
        <Typography component="h1" className={classes.title}>
          For people on income or disability assistance:
        </Typography>
        <Typography className={classes.description}>
          <ul>
            <li>
              Will be automatically provided a <strong>$300 crisis supplement</strong> for the next three months. This supplement will also be provided to low-income seniors who receive the BC Senior’s Supplement and recipients who reside in special care facilities.
            </li>
            <li>
              Will be automatically provided the $52 <strong>Transportation Supplement</strong> on their next cheques for the duration of the fare suspension period.
            </li>
            <li>
              The province will temporarily exempt federal employment insurance benefits, including the new $2,000 Canada Emergency Response Benefit. These payments will be fully exempted for the next three months so people receiving income assistance and disability assistance will benefit without any reductions to their monthly assistance payments.
            </li>
          </ul>
        </Typography>

        {/* Section #7 */}
        <Typography component="h1" className={classes.title}>
          Additional Information
        </Typography>
        <Typography className={classes.description}>
          The Government of Canada has issued an
          <a href="https://travel.gc.ca/travelling/advisories" target="_blank" rel="noopener noreferrer">
            &nbsp;Official Global Travel Advisory&nbsp;
          </a>
          to avoid all non-essential travel
          outside of Canada until further notice.  All travelers are strongly urged to self-monitor for symptoms of
          COVID-19, such as fever, cough or difficulty breathing, for 14 days after returning to Canada.  If you have
          even mild symptoms, stay home and call 811.   Updated March 27, 2020 @ 6:30 PM
        </Typography>

      </Container>

      {/** Footer */}
      <Footer />
    </div>
  );
};

export default LearnMore;
