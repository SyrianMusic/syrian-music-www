import { gql } from '@apollo/client';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Image from '../../components/Image';
import Typography from '../../components/Typography';
import CaretIcon from '../../icons/Caret';
import theme from '../../styles/theme';
import { formatDate } from '../../utils/date';
import { parseRichText } from '../../utils/text';

const DEFAULT_CTA_TEXT = 'Get tickets';

const UpcomingEvent = ({ className, event }) => {
  const { image, location, name, startDate, summary, url, urlText } = event;
  const formattedDate = formatDate(startDate);

  return (
    <div className={cx('component-UpcomingEvent-root', className)}>
      <a
        className="component-UpcomingEvent-image-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        <Image className="component-UpcomingEvent-image" width={432} height={287} src={image.url} />
      </a>
      <div className="component-UpcomingEvent-text">
        <a
          className="component-UpcomingEvent-heading-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <div className="component-UpcomingEvent-heading">
            <Typography className="component-UpcomingEvent-title" variant="h3">
              {name}
            </Typography>
            <Typography size="lg">
              {formattedDate}
              {location && ` | ${location}`}
            </Typography>
          </div>
          <CaretIcon
            className="component-UpcomingEvent-caret-icon"
            color={CaretIcon.colors.accentTan}
          />
        </a>
        {parseRichText(summary.json, null, {
          paragraph: { className: 'component-UpcomingEvent-description' },
        })}
        <Typography size="lg">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {urlText || DEFAULT_CTA_TEXT}
          </a>
        </Typography>
      </div>
      <style jsx>{`
        .component-UpcomingEvent-root {
          display: flex;
          flex-direction: column;
        }

        .component-UpcomingEvent-image-link,
        .component-UpcomingEvent-root :global(.component-UpcomingEvent-image),
        .component-UpcomingEvent-text {
          width: 100%;
        }

        .component-UpcomingEvent-root :global(.component-UpcomingEvent-image) {
          height: auto;
        }

        .component-UpcomingEvent-text {
          padding-top: ${theme.pxToRem(50)};
        }

        .component-UpcomingEvent-heading {
          padding-right: ${theme.pxToRem(24)};
        }

        .component-UpcomingEvent-root :global(.component-UpcomingEvent-description) {
          // Add caret width
          padding-right: ${theme.pxToRem(24 + 22)};
        }

        .component-UpcomingEvent-heading-link {
          color: ${theme.color.primary};
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          text-decoration-color: transparent;
          transition: all 0.2s ease-in-out;
        }

        .component-UpcomingEvent-heading-link:active,
        .component-UpcomingEvent-heading-link:focus,
        .component-UpcomingEvent-heading-link:hover {
          color: ${theme.color.interactive};
          text-decoration-color: ${theme.color.interactive};
        }

        .component-UpcomingEvent-heading :global(.component-UpcomingEvent-title) {
          margin-bottom: ${theme.pxToRem(19)};
        }

        .component-UpcomingEvent-root :global(.component-UpcomingEvent-caret-icon) {
          position: relative;
          bottom: 0px;
        }

        .component-UpcomingEvent-root :global(.component-UpcomingEvent-description) {
          margin-top: ${theme.pxToRem(theme.typography.body.lg.lineHeightMobile)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .component-UpcomingEvent-root {
            flex-direction: row;
          }

          .component-UpcomingEvent-image-link,
          .component-UpcomingEvent-text {
            width: 50%;
          }

          .component-UpcomingEvent-text {
            padding-left: ${theme.pxToRem(62)};
          }

          .component-UpcomingEvent-text {
            padding-top: 0;
          }

          .component-UpcomingEvent-root :global(.component-UpcomingEvent-description) {
            margin-top: ${theme.pxToRem(theme.typography.body.lg.lineHeightDesktop)};
          }
        }
      `}</style>
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
