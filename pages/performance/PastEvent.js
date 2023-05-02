import { gql } from '@apollo/client';
import styled from '@emotion/styled';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import { formatDateRange } from '../../utils/date';

const DEFAULT_CTA_TEXT = 'Read more';

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
      endDate
    }
  `,
};

export const eventPropShape = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
};

const propTypes = {
  className: PropTypes.string,
  event: PropTypes.shape(eventPropShape).isRequired,
};

const defaultProps = { className: undefined };

const PastEvent = ({ className, event }) => {
  const { image, location, name, slug, startDate, endDate } = event;
  const formattedDate = formatDateRange(startDate, endDate);
  const url = `/events/${slug}`;

  return (
    <div
      className={className}
      css={{
        width: theme.pxToRem(theme.closestMultiple(232)),
        [theme.mq.mobileToDesktop]: {
          width: theme.pxToRem(theme.closestMultiple(288)),
        },
      }}>
      <Link href={url} passHref legacyBehavior>
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
          css={[truncatedStyle, { marginBottom: 0 }]}
          size="md">
          {formattedDate}
        </Typography>

        <Typography css={truncatedStyle} size="md">
          {location}
        </Typography>

        <Typography>
          <Link href={url} passHref legacyBehavior>
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
