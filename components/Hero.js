import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Image from './Image';

const Hero = ({ className, content, image, title }) => (
  <div className={className}>
    {title && <h1>{title}</h1>}
    <Image className="component-Hero-image" {...image} />
    {content && <p>{content}</p>}
    <style jsx>{`
      div {
        width: 100%;
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        div {
          width: ${theme.pxToRem(1461)};
        }
      }

      h1,
      p {
        padding: 0 ${theme.pxToRem(50)};
        text-align: right;
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        h1,
        p {
          padding: 0;
        }
      }

      h1 {
        font-size: ${theme.pxToRem(65)};
        line-height: ${theme.pxToRem(78)};
        letter-spacing: -0.01em;
      }

      div :global(.component-Hero-image) {
        margin-top: ${theme.pxToRem(45)};
        margin-bottom: ${theme.pxToRem(66)};
        height: auto;
        width: 100%;
      }

      p {
        font-size: ${theme.pxToRem(43)};
        line-height: ${theme.pxToRem(52)};
        letter-spacing: 0.01em;
      }
    `}</style>
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  image: PropTypes.shape(Image.propTypes).isRequired,
  title: PropTypes.string,
};

Hero.defaultProps = {
  className: undefined,
  content: undefined,
  title: undefined,
};

export default Hero;
