import cx from 'classnames';
import PropTypes from 'prop-types';
import Image from './Image';
import theme from '../styles/theme';

const Hero = ({ className, content, image, title }) => (
  <div className={cx('component-Hero-root', className)}>
    {title && <h1>{title}</h1>}
    <Image className="component-Hero-image" {...image} />
    {content && <p>{content}</p>}
    <style jsx>{`
      .component-Hero-root {
        width: 100%;
      }

      .component-Hero-root h1,
      .component-Hero-root p {
        text-align: right;
      }

      .component-Hero-root h1 {
        font-size: ${theme.pxToRem(65)};
        line-height: ${theme.pxToRem(78)};
        letter-spacing: -0.01em;
      }

      .component-Hero-root :global(.component-Hero-image) {
        margin-top: ${theme.pxToRem(45)};
        margin-bottom: ${theme.pxToRem(66)};
      }

      .component-Hero-root p {
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
