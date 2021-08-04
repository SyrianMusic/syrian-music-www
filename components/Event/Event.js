import PropTypes from 'prop-types';
import cx from 'classnames';
import CaretIcon from '../../icons/Caret';
import theme from '../../styles/theme';
import Image from '../Image';
import Typography from '../Typography';

const formatDate = (date) => {
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

export const Event = ({ className, cta, description, image, title, date, slug }) => (
  <div className={cx('component-Event-root', className)}>
    <div className="component-Event-image-wrapper">
      <Image className="component-Event-image" width={432} height={287} {...image} />
    </div>
    <div className="component-Event-text">
      <a
        className="component-Event-heading-link"
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer">
        <div className="component-Event-heading">
          <Typography className="component-Event-title" variant="h3">
            {title}
          </Typography>
          <Typography size="lg">
            {formatDate(date)}
            {slug && ` | ${slug}`}
          </Typography>
        </div>
        <CaretIcon className="component-Event-caret-icon" color={CaretIcon.colors.accentTan} />
      </a>
      <Typography className="component-Event-description" size="lg">
        {description}
      </Typography>
      <Typography size="lg">
        <a href={cta.href} target="_blank" rel="noopener noreferrer">
          {cta.text}
        </a>
      </Typography>
    </div>
    <style jsx>{`
      .component-Event-root {
        display: flex;
        flex-direction: column;
      }

      .component-Event-image-wrapper,
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
        text-decoration-color: ${theme.color.primary};
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

        .component-Event-image-wrapper,
        .component-Event-text {
          width: 50%;
        }

        .component-Event-text {
          padding-left: ${theme.pxToRem(62)};
        }

        .component-Event-root :global(.component-Event-description) {
          margin-top: ${theme.pxToRem(theme.typography.body.lg.lineHeightDesktop)};
        }
      }
    `}</style>
  </div>
);

Event.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  // fix prop type
  date: PropTypes.date?.isRequired,
  description: PropTypes.string,
  image: PropTypes.shape(Image.propTypes).isRequired,
  slug: PropTypes.string,
};

Event.defaultProps = {
  className: undefined,
  description: undefined,
  slug: undefined,
};