import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import theme from '../../styles/theme';
import PastEvent from './PastEvent';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const arrowPositions = {
  left: 'left',
  right: 'right',
};

const Arrow = styled.button(({ position }) => {
  let left;
  let right;
  let transform;

  const positionValue = theme.pxToRem(-35);

  if (position === arrowPositions.left) {
    left = positionValue;
    right = 'auto';
    transform = 'rotate(135deg)';
  } else if (position === arrowPositions.right) {
    right = positionValue;
    transform = 'rotate(-45deg)';
  }

  return {
    top: '25%',
    left,
    right,
    '&:before': {
      display: 'block',
      background: 'transparent',
      borderRight: '3px solid pink',
      borderBottom: '3px solid pink',
      content: '""',
      width: theme.pxToRem(20),
      height: theme.pxToRem(20),
      transform,
    },
    '&.slick-disabled': {
      display: 'none !important',
    },
  };
});

const PastEventsList = ({ pastEventItems }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <Arrow position={arrowPositions.left} />,
    nextArrow: <Arrow position={arrowPositions.right} />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  return (
    <div
      css={{
        marginTop: theme.spacing.get(32),
        marginBottom: theme.spacing.get(48),
        [theme.mq.mobileToDesktop]: {
          marginTop: theme.spacing.get(56),
          marginBottom: theme.spacing.get(84),
        },
      }}>
      <Slider {...settings}>
        {pastEventItems.map((event, index) => {
          let css;
          const isLastSlide = index === pastEventItems.length - 1;

          if (!isLastSlide) {
            css = {
              marginRight: theme.spacing.get(24),
              [theme.mq.mobileToDesktop]: {
                marginRight: theme.spacing.get(40),
              },
            };
          }

          return <PastEvent key={event.sys.id} css={css} event={event} />;
        })}
      </Slider>
    </div>
  );
};

PastEventsList.propTypes = {
  pastEventItems: PropTypes.arrayOf(PropTypes.shape(PastEvent.propTypes.event)),
};

PastEventsList.defaultProps = {
  pastEventItems: [],
};

export default PastEventsList;
