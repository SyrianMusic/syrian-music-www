import { gql } from '@apollo/client';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import { formatDateTime } from '../../utils/date';

const DEFAULT_CTA_TEXT = 'Read more';
const SLIDE_WIDTH_MOBILE = theme.closestMultiple(232);
const SLIDE_WIDTH_DESKTOP = theme.closestMultiple(288);

const SlideImage = styled.a(({ backgroundImage }) => ({
  width: '100%',
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

const PastEvent = ({ className, event, isLastSlide }) => {
  const { image, location, name, slug, startDate } = event;
  const formattedDate = formatDateTime(startDate);
  const url = `/events/${slug}`;

  return (
    <div
      className={className}
      css={{
        width: theme.pxToRem(SLIDE_WIDTH_MOBILE),
        height: theme.pxToRem(theme.closestMultiple(250)),
        ...(isLastSlide
          ? {
              marginRight: 0,
            }
          : { marginRight: 21 }),
        [theme.mq.mobileToDesktop]: {
          width: theme.pxToRem(SLIDE_WIDTH_DESKTOP),
          height: theme.pxToRem(theme.closestMultiple(325)),
          ...(isLastSlide
            ? {
                marginRight: 0,
              }
            : { marginRight: 40 }),
        },
      }}>
      <Link href={url}>
        <SlideImage backgroundImage={image.url} />
      </Link>
      <div
        css={{
          marginTop: theme.pxToRem(30),
          maxWidth: theme.pxToRem(SLIDE_WIDTH_MOBILE),
          flexGrow: 1,
          [theme.mq.mobileToDesktop]: {
            paddingTop: 0,
            maxWidth: 'initial',
          },
        }}>
        <Typography
          size="lg"
          as="h3"
          css={[
            truncatedStyle,
            {
              marginBottom: theme.spacing.get(8),
              [theme.mq.mobileToDesktop]: {
                marginBottom: theme.spacing.get(24),
              },
            },
          ]}>
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
        <Typography size="md" css={truncatedStyle}>
          {location}
        </Typography>

        <Typography css={{ position: 'absolute', bottom: 0 }}>
          <Link href={url}>
            <a>{DEFAULT_CTA_TEXT}</a>
          </Link>
        </Typography>
      </div>
    </div>
  );
};

PastEvent.propTypes = {
  className: PropTypes.string,
  // TODO: create typings either with prop types or typescript
  event: PropTypes.shape({
    name: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    slug: PropTypes.string.isRequired,
  }).isRequired,
  isLastSlide: PropTypes.bool,
};

PastEvent.defaultProps = {
  className: undefined,
  isLastSlide: false,
};

PastEvent.fragments = {
  event: gql`
    fragment PastEvent on Event {
      name
      startDate
      location
      image {
        url
      }
      slug
    }
  `,
};

export default PastEvent;
