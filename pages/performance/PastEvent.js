import { gql } from '@apollo/client';
import styled from '@emotion/styled';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import { formatDateTime } from '../../utils/date';

const DEFAULT_CTA_TEXT = 'Read more';
const SLIDE_WIDTH_MOBILE = theme.closestMultiple(232);
const SLIDE_WIDTH_DESKTOP = theme.closestMultiple(288);

const SlideImage = styled.a(({ backgroundImage }) => ({
  height: theme.pxToRem(theme.closestMultiple(130)),
  display: 'block',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [theme.mq.mobileToDesktop]: {
    height: theme.pxToRem(theme.closestMultiple(162)),
  },
}));

const truncatedStyle = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const fragments = {
  event: gql`
    fragment PastEvent on Event {
      image {
        url
      }
      location
      name
      slug
      startDate
    }
  `,
};

const propTypes = {
  className: PropTypes.string,
  event: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = { className: undefined };

const PastEvent = ({ className, event }) => {
  const { image, location, name, slug, startDate } = event;
  const formattedDate = formatDateTime(startDate);
  const url = `/events/${slug}`;

  return (
    <div
      className={className}
      css={{
        width: theme.pxToRem(SLIDE_WIDTH_MOBILE),
        [theme.mq.mobileToDesktop]: {
          width: theme.pxToRem(SLIDE_WIDTH_DESKTOP),
        },
      }}>
      <Link href={url}>
        <SlideImage backgroundImage={image.url} />
      </Link>

      <div css={{ marginTop: theme.spacing.get(32) }}>
        <Typography
          size="lg"
          as="h3"
          css={[
            truncatedStyle,
            {
              marginBottom: theme.spacing.get(8),
              [theme.mq.mobileToDesktop]: {
                marginBottom: theme.spacing.get(16),
              },
            },
          ]}>
          {name}
        </Typography>

        <Typography
          suppressHydrationWarning
          dateTime={startDate}
          as="time"
          css={{ marginBottom: 0 }}
          size="md">
          {formattedDate}
        </Typography>

        <Typography css={truncatedStyle} size="md">
          {location}
        </Typography>

        <Typography css={{}}>
          <Link href={url}>
            <a>{DEFAULT_CTA_TEXT}</a>
          </Link>
        </Typography>
      </div>
    </div>
  );
};

PastEvent.propTypes = propTypes;
PastEvent.defaultProps = defaultProps;
PastEvent.fragments = fragments;

export default PastEvent;
