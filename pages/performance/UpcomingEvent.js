import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import Image from '../../components/Image';
import Typography, * as typography from '../../components/Typography';
import CaretIcon from '../../icons/Caret';
import theme from '../../styles/theme';
import { formatDateTime } from '../../utils/date';
import { parseRichText } from '../../utils/text';

const DEFAULT_CTA_TEXT = 'Get tickets';

const UpcomingEvent = ({ className, event }) => {
  const { image, location, name, startDate, summary, url, urlText } = event;
  const formattedDate = formatDateTime(startDate);

  return (
    <div
      className={className}
      css={{
        display: 'flex',
        flexDirection: 'column',
        [theme.mq.mobileToDesktop]: { flexDirection: 'row' },
      }}>
      <a
        css={{ width: '100%', [theme.mq.mobileToDesktop]: { width: '50%' } }}
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        <Image css={{ width: '100%', height: 'auto' }} width={432} height={287} src={image.url} />
      </a>
      <div
        css={{
          paddingTop: theme.spacing.get(32),
          width: '100%',
          [theme.mq.mobileToDesktop]: {
            paddingLeft: theme.pxToRem(62),
            paddingTop: 0,
            width: '50%',
          },
        }}>
        <a
          css={[
            typography.mixins.linkStylesBlack,
            { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' },
          ]}
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <div css={{ paddingRight: theme.pxToRem(24) }}>
            <Typography variant="h3" css={{ marginBottom: theme.pxToRem(19) }}>
              {name}
            </Typography>
            <Typography size="lg">
              {formattedDate}
              {location && ` | ${location}`}
            </Typography>
          </div>
          <CaretIcon
            color={CaretIcon.colors.accentTan}
            css={{
              position: 'relative',
              bottom: 0,
              [theme.mq.mobileToDesktop]: {
                marginTop: theme.pxToRem(theme.typography.body.lg.lineHeightDesktop),
              },
            }}
          />
        </a>
        {parseRichText(summary.json, null, {
          paragraph: {
            // Add caret width
            css: {
              paddingRight: theme.pxToRem(24 + 22),
              marginTop: theme.pxToRem(theme.typography.body.lg.lineHeightMobile),
            },
          },
        })}
        <Typography size="lg">
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
};

UpcomingEvent.fragments = {
  event: gql`
    fragment UpcomingEvent on Event {
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

export default UpcomingEvent;
