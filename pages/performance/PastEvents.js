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
    <div className={cx('component-PastEvents-root', className)}>
      <a
        className="component-PastEvents-image-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        <Image className="component-PastEvents-image" width={432} height={287} src={image.url} />
      </a>
      <div className="component-PastEvents-text">
        <div className="component-PastEvents-heading">
          <Typography className="component-PastEvents-title" variant="h3">
            {name}
          </Typography>
          <Typography size="md">{formattedDate}</Typography>
          <Typography size="md">{location}</Typography>
        </div>
        <Typography size="md">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {DEFAULT_CTA_TEXT}
          </a>
        </Typography>
      </div>
      <style jsx>{`
        .component-PastEvents-root {
          display: flex;
          flex-direction: column;
        }

        .component-PastEvents-image-link,
        .component-PastEvents-root :global(.component-PastEvents-image),
        .component-PastEvents-text {
          width: 100%;
        }

        .component-PastEvents-root :global(.component-PastEvents-image) {
          height: auto;
        }

        .component-PastEvents-text {
          padding-top: ${theme.pxToRem(50)};
        }

        .component-PastEvents-heading {
          padding-right: ${theme.pxToRem(24)};
        }

        .component-PastEvents-root :global(.component-PastEvents-description) {
          // Add caret width
          padding-right: ${theme.pxToRem(24 + 22)};
        }

        .component-PastEvents-heading-link {
          color: ${theme.color.primary};
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          text-decoration-color: transparent;
          transition: all 0.2s ease-in-out;
        }

        .component-PastEvents-heading-link:active,
        .component-PastEvents-heading-link:focus,
        .component-PastEvents-heading-link:hover {
          color: ${theme.color.interactive};
          text-decoration-color: ${theme.color.interactive};
        }

        .component-PastEvents-heading :global(.component-PastEvents-title) {
          margin-bottom: ${theme.pxToRem(19)};
        }

        .component-PastEvents-root :global(.component-PastEvents-caret-icon) {
          position: relative;
          bottom: 0px;
        }

        .component-PastEvents-root :global(.component-PastEvents-description) {
          margin-top: ${theme.pxToRem(theme.typography.body.lg.lineHeightMobile)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          //   .component-PastEvents-image-link,
          //   .component-PastEvents-text {
          //     width: 50%;
          //   }

          .component-PastEvents-text {
            padding-left: ${theme.pxToRem(62)};
          }

          .component-PastEvents-text {
            padding-top: 0;
          }

          .component-PastEvents-root :global(.component-PastEvents-description) {
            margin-top: ${theme.pxToRem(theme.typography.body.lg.lineHeightDesktop)};
          }
        }
      `}</style>
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
