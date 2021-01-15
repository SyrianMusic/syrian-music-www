import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Image = ({ className, alt, src, height, width }) => (
  <>
    <img className={`image ${className}`} src={src} alt={alt} width={width} height={height} />
    <style jsx>
      {`
        .image {
          display: block;
          margin: 0;
          height: ${theme.pxToRem(height)};
          width: ${theme.pxToRem(width)};
        }
      `}
    </style>
  </>
);

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: undefined,
  alt: '',
};

export default Image;
