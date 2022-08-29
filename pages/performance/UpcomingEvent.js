import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import Image from '../../components/Image';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import { formatDateRange } from '../../utils/date';
import { parseRichText } from '../../utils/text';

const DEFAULT_CTA_TEXT = 'Get tickets';

const UpcomingEvent = ({ className, event }) => {
  const { image, location, name, startDate, endDate, summary, url, urlText } = event;
  const formattedDate = formatDateRange(startDate, endDate);

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
          {formattedDate}
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

UpcomingEvent.propTypes = {
  className: PropTypes.string,
  // TODO: create typings either with prop types or typescript
  event: PropTypes.shape({
    name: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
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

UpcomingEvent.defaultProps = {
  className: undefined,
  endDate: null,
};

UpcomingEvent.fragments = {
  event: gql`
    fragment UpcomingEvent on Event {
      name
      startDate
      endDate
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

export default UpcomingEvent;
