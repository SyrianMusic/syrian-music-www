import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Image from './Image';
import Video from './Video';

const Hero = ({ className, children, image, subtitle, title, video }) => (
  <div className={cx('component-Hero-root', className)}>
    {title && <div className={cx('component-Hero-title', 'gutters')}>{title}</div>}
    <figure>
      {image && <Image className="component-Hero-image" {...image} />}
      {video && <Video className="component-Hero-video" {...video} />}
    </figure>
    {subtitle && <figcaption className="component-Hero-subtitle gutters">{subtitle}</figcaption>}
    {children && <div className="component-Hero-description gutters">{children}</div>}
    <style jsx>{`
      .component-Hero-root {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        .component-Hero-root {
          width: ${theme.pxToRem(730.5)};
        }
      }

      .component-Hero-title,
      .component-Hero-subtitle,
      .component-Hero-description {
        text-align: right;
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        .component-Hero-title,
        .component-Hero-subtitle,
        .component-Hero-description {
          margin: 0;
        }
      }

      .component-Hero-root :global(.component-Hero-image),
      .component-Hero-root :global(.component-Hero-video) {
        margin-top: ${theme.pxToRem(12)};
        margin-bottom: ${theme.pxToRem(12)};
        height: auto;
        width: 100%;
      }

      .component-Hero-description {
        margin-top: ${theme.pxToRem(33)};
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
