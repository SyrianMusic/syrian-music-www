import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Image = ({ className, alt, height, width, src, srcSet: srcSetProp }) => {
  let srcSet;

  if (srcSetProp) {
    srcSet = srcSetProp.map(({ densityFactor, src }) => `${src} ${densityFactor}x`).join(', ');
    srcSet = `${src}, ${srcSet}`;
  }

  console.log({ width, rem: theme.pxToRem(width) });
  return (
    <>
      <img
        className={cx('component-Image-root', className)}
        src={src}
        srcSet={srcSet}
        alt={alt}
        width={width}
        height={height}
      />
      <style jsx>
        {`
          .component-Image-root {
            display: block;
            margin: 0;
            height: ${theme.pxToRem(height)};
            width: ${theme.pxToRem(width)};
          }
        `}
      </style>
    </>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.arrayOf(
    PropTypes.shape({
      densityFactor: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ),
};

Image.defaultProps = {
  className: undefined,
  alt: '',
  srcSet: undefined,
};

export default Image;
