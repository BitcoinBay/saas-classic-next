/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';
import { Fragment } from 'react';

const data = [
  {
    id: 1,
    color: '#28D1DC',
    value: '200+',
    title: 'Community Engagement Events',
  },
  {
    id: 2,
    color: '#FF753A',
    value: '4000+',
    title: 'Meetup Members *Need something better*',
  },
  {
    id: 3,
    color: '#FA578E',
    value: '10+',
    title: 'Educational & Institutional Partners',
  },
  {
    id: 4,
    color: '#28DCB2',
    value: '4',
    title: 'Blockchain Hackathons',
  },
];

const Features = () => {
  return (
    <Box as="section" variant="section.features">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title={
                <Fragment>
                  Bitcoin Bay <br />
                  Our engagements with the community
                </Fragment>
              }
              description="We have grown a robust grassroots group of experts, entrepreneurs, developers, investors and beginners in broader blockchain ecosystem."
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Regularly hosted community meetup engagements
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Highlight business and technological innovation
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Feature emerging initiatives and developments
            </Text>
            {/*<Box sx={styles.explore}>
              <LearnMore path="#!" label="Explore More" />
            </Box>*/}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ['flex', 'flex', 'grid'],
    flexDirection: ['column-reverse', 'column-reverse', 'unset'],
    gridTemplateColumns: [
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.2fr 0.8fr',
    ],
    alignItems: 'center',
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ['grid', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'flex-start',
    '> div': {
      ':first-of-type': {
        mt: ['65px'],
      },
      ':last-of-type': {
        mt: ['-65px'],
      },
    },
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, '-70px'],
    h2: {
      fontSize: ['28px', '28px', '28px', '28px', '36px', '40px'],
      lineHeight: [1.25, 1.5],
      letterSpacing: '-1.5px',
      br: {
        display: ['none', 'none', 'none', 'block'],
      },
    },
    p: {
      mt: ['15px', '10px'],
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
