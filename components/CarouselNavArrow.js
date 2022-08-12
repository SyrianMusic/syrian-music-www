import PropTypes from 'prop-types';

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

CarouselNavArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.oneOf[('left', 'right')],
};

CarouselNavArrow.defaultProps = {
  className: undefined,
  onClick: () => {},
  position: 'right',
};

export default CarouselNavArrow;
