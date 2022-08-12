import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import { formatDateTime } from '../../utils/date';

const DEFAULT_CTA_TEXT = 'Read more';
const SLIDE_WIDTH = 232;
const SLIDE_WIDTH_DESKTOP = 288;

const SlideImage = styled.a([
  {
    width: SLIDE_WIDTH,
    height: 130,
    display: 'block',
    backgroundImage: `var(--background-style)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.mq.mobileToDesktop]: {
      width: SLIDE_WIDTH_DESKTOP,
      height: 162,
    },
  },
]);

const PastEvents = ({ className, event }) => {
  const { image, location, name, startDate, url } = event;
  const formattedDate = formatDateTime(startDate);

  return (
    <div
      className={className}
      css={{
        width: SLIDE_WIDTH,
        height: 250,
        marginRight: 21,
        [theme.mq.mobileToDesktop]: {
          width: SLIDE_WIDTH_DESKTOP,
          height: 325,
          marginRight: 40,
        },
      }}>
      <SlideImage
        style={{ '--background-style': `url(${image.url})` }}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      />
      <div
        css={{
          marginTop: theme.pxToRem(30),
          maxWidth: theme.pxToRem(theme.closestMultiple(SLIDE_WIDTH)),
          flexGrow: 1,
          [theme.mq.mobileToDesktop]: {
            paddingTop: 0,
            maxWidth: 'initial',
          },
        }}>
        <Typography
          size="lg"
          as="h3"
          css={{
            textOverflow: 'ellipsis',
            marginBottom: theme.spacing.get(8),
            width: theme.pxToRem(theme.closestMultiple(SLIDE_WIDTH)),
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            [theme.mq.mobileToDesktop]: {
              marginBottom: theme.spacing.get(24),
              width: theme.pxToRem(theme.closestMultiple(SLIDE_WIDTH_DESKTOP)),
            },
          }}>
          {name}
        </Typography>
        <Typography
          css={{
            marginBottom: theme.pxToRem(8),
            [theme.mq.mobileToDesktop]: {
              marginBottom: theme.pxToRem(6),
            },
          }}
          size="md">
          {formattedDate}
        </Typography>
        <Typography size="md">{location}</Typography>

        <Typography css={{ position: 'absolute', bottom: 0 }}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {DEFAULT_CTA_TEXT}
          </a>
        </Typography>
      </div>
    </div>
  );
};

PastEvents.propTypes = {
  className: PropTypes.string,
  // TODO: create typings either with prop types or typescript
  event: PropTypes.shape({
    name: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

PastEvents.defaultProps = {
  className: undefined,
};

PastEvents.fragments = {
  event: gql`
    fragment PastEvents on Event {
      name
      startDate
      location
      image {
        url
      }
      url
    }
  `,
};

export default PastEvents;
