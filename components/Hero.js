import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Image from './Image';
import Typography from './Typography';
import Video from './Video';

const Hero = ({ className, children, image, subtitle, title, video }) => (
  <div className={cx('component-Hero-root', className)}>
    <Typography
      className={cx('component-Hero-title', 'gutters')}
      variant="h3"
      as="h1"
      textAlign="center">
      {title}
    </Typography>
    <figure>
      {image && <Image className="component-Hero-image" {...image} />}
      {video && <Video className="component-Hero-video" {...video} />}
    </figure>
    {subtitle && <figcaption className={cx('component-Hero-subtitle')}>{subtitle}</figcaption>}
    {children && <div className={cx('component-Hero-description', 'gutters')}>{children}</div>}
    <style jsx>{`
      .component-Hero-root :global(.component-Hero-title) {
        margin-bottom: ${theme.pxToRem(22 * 2)};
      }

      .component-Hero-root :global(.component-Hero-image),
      .component-Hero-root :global(.component-Hero-video) {
        margin-bottom: ${theme.pxToRem(27.5 * 2)};
        height: auto;
        width: 100%;
      }

      .component-Hero-root :global(.component-Hero-subtitle) {
        margin-left: ${theme.pxToRem(22 * 2)};
        margin-right: ${theme.pxToRem(22 * 2)};
      }

      .component-Hero-description {
        margin-top: ${theme.pxToRem(25 * 2)};
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        .component-Hero-root {
          margin-left: auto;
          margin-right: auto;
          width: ${theme.pxToRem(730.5)};
        }

        .component-Hero-title,
        .component-Hero-subtitle,
        .component-Hero-description {
          margin: 0;
        }
      }
    `}</style>
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.shape(Image.propTypes),
  subtitle: PropTypes.node,
  title: PropTypes.node,
  video: PropTypes.shape(Video.propTypes),
};

Hero.defaultProps = {
  className: undefined,
  children: undefined,
  image: undefined,
  subtitle: undefined,
  title: undefined,
  video: undefined,
};

export default Hero;
