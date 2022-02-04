import { gql } from '@apollo/client';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CaretIcon from '../../icons/Caret';
import theme from '../../styles/theme';
import { portableTextMap, portableTextPropType } from '../../utils/text';
import Image from '../Image';
import Typography from '../Typography';
import { parseNode } from '../../pages/events/EventsPage';

const DEFAULT_CTA_TEXT = 'Get tickets';

// TODO: Create shared util
export const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
  });
  let month;
  let day;
  let year;
  let hour;
  let dayPeriod;
  formatter.formatToParts(date).forEach(({ type, value }) => {
    switch (type) {
      case 'month':
        month = value;
        break;
      case 'day':
        day = value;
        break;
      case 'year':
        year = value;
        break;
      case 'hour':
        hour = value;
        break;
      case 'dayPeriod':
        dayPeriod = value;
        break;
      default:
        break;
    }
  });
  return `${hour}${dayPeriod} ${month} ${day}, ${year}`;
};

// TODO: Rename UpcomingEvent
// TODO: Move to /performance dir
export const Event = ({
  className,
  description,
  image,
  location,
  name,
  startDate,
  summary,
  url,
  urlText,
}) => {
  const formattedDate = formatDate(new Date(startDate));

  return (
    <div className={cx('component-Event-root', className)}>
      <a
        className="component-Event-image-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        <Image className="component-Event-image" width={432} height={287} src={image.url} />
      </a>
      <div className="component-Event-text">
        <a
          className="component-Event-heading-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <div className="component-Event-heading">
            <Typography className="component-Event-title" variant="h3">
              {name}
            </Typography>
            <Typography size="lg">
              {formattedDate}
              {location && ` | ${location}`}
            </Typography>
          </div>
          <CaretIcon className="component-Event-caret-icon" color={CaretIcon.colors.accentTan} />
        </a>
        {parseNode(summary.json, null, 'component-Event-description')}
        <Typography size="lg">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {urlText || DEFAULT_CTA_TEXT}
          </a>
        </Typography>
      </div>
      <style jsx>{`
        .component-Event-root {
          display: flex;
          flex-direction: column;
        }

        .component-Event-image-link,
        .component-Event-root :global(.component-Event-image),
        .component-Event-text {
          width: 100%;
        }

        .component-Event-root :global(.component-Event-image) {
          height: auto;
        }

        .component-Event-text {
          padding-top: ${theme.pxToRem(50)};
        }

        .component-Event-heading {
          padding-right: ${theme.pxToRem(24)};
        }

        .component-Event-root :global(.component-Event-description) {
          // Add caret width
          padding-right: ${theme.pxToRem(24 + 22)};
        }

        .component-Event-heading-link {
          color: ${theme.color.primary};
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          text-decoration-color: transparent;
          transition: all 0.2s ease-in-out;
        }

        .component-Event-heading-link:active,
        .component-Event-heading-link:focus,
        .component-Event-heading-link:hover {
          color: ${theme.color.interactive};
          text-decoration-color: ${theme.color.interactive};
        }

        .component-Event-heading :global(.component-Event-title) {
          margin-bottom: ${theme.pxToRem(19)};
        }

        .component-Event-root :global(.component-Event-caret-icon) {
          position: relative;
          bottom: 0px;
        }

        .component-Event-root :global(.component-Event-description) {
          margin-top: ${theme.pxToRem(theme.typography.body.lg.lineHeightMobile)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .component-Event-root {
            flex-direction: row;
          }

          .component-Event-image-link,
          .component-Event-text {
            width: 50%;
          }

          .component-Event-text {
            padding-left: ${theme.pxToRem(62)};
          }

          .component-Event-text {
            padding-top: 0;
          }

          .component-Event-root :global(.component-Event-description) {
            margin-top: ${theme.pxToRem(theme.typography.body.lg.lineHeightDesktop)};
          }
        }
      `}</style>
    </div>
  );
};

// TODO: Update propTypes
Event.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  description: portableTextPropType,
  image: PropTypes.shape(Image.propTypes).isRequired,
  location: PropTypes.string,
  summary: PropTypes.shape({
    json: PropTypes.shape({}).isRequired,
  }),
  url: PropTypes.string,
  urlText: PropTypes.string,
};

Event.defaultProps = {
  className: undefined,
  description: undefined,
  location: undefined,
};

Event.fragments = {
  upcomingEvent: gql`
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
