import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Image = ({ className, alt, height, width, src, srcSet: srcSetProp, url }) => {
  let srcSet;

  if (srcSetProp) {
    srcSet = srcSetProp.map(({ densityFactor, src }) => `${src} ${densityFactor}x`).join(', ');
    srcSet = `${src}, ${srcSet}`;
  }

  return (
    <img
      css={{
        display: 'block',
        margin: 0,
        height: theme.pxToRem(height),
        width: theme.pxToRem(width),
      }}
      className={className}
      src={src || url}
      srcSet={srcSet}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  src: PropTypes.string,
  srcSet: PropTypes.arrayOf(
    PropTypes.shape({
      densityFactor: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ),
  url: PropTypes.string,
};

Image.defaultProps = {
  className: undefined,
  alt: '',
  srcSet: undefined,
};

Image.fragments = {
  asset: gql`
    fragment Image on Asset {
      url
      width
      height
    }
  `,
};

export default Image;
