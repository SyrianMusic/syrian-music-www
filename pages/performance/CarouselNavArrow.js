import PropTypes from 'prop-types';

const positions = {
  left: 'left',
  right: 'right',
};

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.oneOf(Object.values(positions)).isRequired,
};

const defaultProps = { className: undefined };

const CarouselNavArrow = ({ className, onClick, position }) => {
  return (
    <button
      className={className}
      css={{
        top: '25%',
        ...(position === 'right'
          ? {
              right: '-35px',
            }
          : {
              left: '-35px',
              right: 'auto',
            }),
        '&:before': {
          display: 'block',
          background: 'transparent',
          borderRight: '3px solid pink',
          borderBottom: '3px solid pink',
          content: '""',
          width: '20px',
          height: '20px',
          ...(position === 'right'
            ? {
                transform: 'rotate(-45deg)',
              }
            : {
                transform: 'rotate(135deg)',
              }),
        },
        '&.slick-disabled': {
          display: 'none',
        },
      }}
      onClick={onClick}
    />
  );
};

CarouselNavArrow.propTypes = propTypes;
CarouselNavArrow.defaultProps = defaultProps;
CarouselNavArrow.positions = positions;

export default CarouselNavArrow;
