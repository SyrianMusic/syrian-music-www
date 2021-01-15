import cx from 'classnames';
import PropTypes from 'prop-types';
import Image from './Image';
import theme from '../styles/theme';

const Hero = ({ className }) => (
  <div className={cx('component-Hero-root', className)}>
    <h1>Welcome to the Syrian Music Preservation Initiative</h1>
    <Image className="component-Hero-image" src="/images/home-hero.jpg" width={1457} height={820} />
    <p>
      a non-profit organization dedicated to the preservation, protection and celebration of the
      musical traditions of classical Arabic music. The initiatives of this organization serve as
      both a connection to our history and as a source of pride for future generations.
    </p>
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
};

Hero.defaultProps = {
  className: undefined,
};

export default Hero;
