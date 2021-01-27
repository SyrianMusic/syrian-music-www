import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Image from './Image';
import Video from './Video';

const Hero = ({ className, children, image, subtitle, title, video }) => (
  <div className={className}>
    {title && <div className="component-Hero-title">{title}</div>}
    {image && <Image className="component-Hero-image" {...image} />}
    {video && <Video className="component-Hero-video" {...video} />}
    {subtitle && <div className="component-Hero-subtitle">{subtitle}</div>}
    {children && <div className="component-Hero-description">{children}</div>}
    <style jsx>{`
      div {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        div {
          width: ${theme.pxToRem(1461)};
        }
      }

      .component-Hero-title,
      .component-Hero-subtitle,
      .component-Hero-description {
        padding: 0 ${theme.pxToRem(50)};
        text-align: right;
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        .component-Hero-title,
        .component-Hero-subtitle,
        .component-Hero-description {
          padding: 0;
        }
      }

      div :global(.component-Hero-image),
      div :global(.component-Hero-video) {
        margin-top: ${theme.pxToRem(24)};
        margin-bottom: ${theme.pxToRem(24)};
        height: auto;
        width: 100%;
      }

      .component-Hero-description {
        margin-top: ${theme.pxToRem(66)};
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
