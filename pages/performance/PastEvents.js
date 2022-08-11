import { gql } from '@apollo/client';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Image from '../../components/Image';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import { formatDateTime } from '../../utils/date';

const DEFAULT_CTA_TEXT = 'Read more';

const PastEvents = ({ className, event }) => {
  const { image, location, name, startDate, url } = event;
  const formattedDate = formatDateTime(startDate);

  return (
    <div className={className}>
      <a
        css={{
          width: 300,
          height: 170,
          overflow: 'hidden',
          background: 'black',
          display: 'block',
        }}
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        <Image css={{ width: '100%', height: 'auto' }} width={300} height={200} src={image.url} />
      </a>
      <div
        css={{
          marginTop: theme.spacing.get(32),
          maxWidth: theme.pxToRem(theme.closestMultiple(270)),
          [theme.mq.mobileToDesktop]: {
            paddingTop: 0,
            maxWidth: 'initial',
          },
        }}>
        <Typography
          variant="h3"
          css={{
            marginBottom: theme.spacing.get(8),
            [theme.mq.mobileToDesktop]: { marginBottom: theme.spacing.get(16) },
          }}>
          {name}
        </Typography>
        <Typography
          css={{
            marginBottom: theme.pxToRem(8),
            [theme.mq.mobileToDesktop]: {
              marginBottom: theme.pxToRem(10),
            },
          }}
          size="sm">
          {formattedDate}
        </Typography>
        <Typography size="sm">{location}</Typography>

        <Typography css={{ marginTop: theme.spacing.get(32) }}>
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
    urlText: PropTypes.string,
    summary: PropTypes.shape({
      json: PropTypes.shape({}),
    }),
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
      urlText
      summary {
        json
      }
    }
  `,
};

export default PastEvents;
