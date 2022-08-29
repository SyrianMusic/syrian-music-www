import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import Image from '../../components/Image';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import { formatDateTime } from '../../utils/date';
import { parseRichText } from '../../utils/text';

const DEFAULT_CTA_TEXT = 'Get tickets';

const fragments = {
  event: gql`
    fragment UpcomingEvent on Event {
      image {
        url
      }
      location
      name
      startDate
      endDate
      summary {
        json
      }
      url
      urlText
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
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.shape({
      json: PropTypes.shape({}),
    }),
    url: PropTypes.string.isRequired,
    urlText: PropTypes.string,
  }).isRequired,
};

const defaultProps = { className: undefined, endDate: null };

const UpcomingEvent = ({ className, event }) => {
  const { image, location, name, startDate, summary, url, urlText } = event;
  const formattedDate = formatDateTime(startDate);

  return (
    <div className={className}>
      <a css={{ width: '100%' }} href={url} target="_blank" rel="noopener noreferrer">
        <Image css={{ width: '100%', height: 'auto' }} width={432} height={287} src={image.url} />
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
        <Typography>
          <time suppressHydrationWarning dateTime={startDate}>
            {formattedDate}
          </time>
          {location && ` | ${location}`}
        </Typography>
        {parseRichText(summary.json, null, {
          paragraph: {
            css: {
              marginTop: theme.pxToRem(theme.typography.body.lg.lineHeightMobile),
            },
          },
        })}
        <Typography css={{ marginTop: theme.spacing.get(32) }}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {urlText || DEFAULT_CTA_TEXT}
          </a>
        </Typography>
      </div>
    </div>
  );
};

UpcomingEvent.propTypes = propTypes;
UpcomingEvent.defaultProps = defaultProps;
UpcomingEvent.fragments = fragments;

export default UpcomingEvent;
