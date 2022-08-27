import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import theme from '../../styles/theme';
import PastEvent from './PastEvent';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const arrowBorder = `${theme.pxToRem(3)} solid ${theme.color.interactive}`;
const arrowPosition = theme.pxToRem(-35);

const arrowBeforeStyles = {
  display: 'block',
  background: 'transparent',
  borderRight: arrowBorder,
  borderBottom: arrowBorder,
  content: '""',
  width: theme.pxToRem(20),
  height: theme.pxToRem(20),
};

const Arrow = styled.button({
  top: '25%',

  '&.slick-prev': {
    left: arrowPosition,
    transform: 'rotate(135deg)',
    '&::before': arrowBeforeStyles,
  },

  '&.slick-next': {
    right: arrowPosition,
    transform: 'rotate(-45deg)',
    '&::before': arrowBeforeStyles,
  },

  '&.slick-disabled': {
    visibility: 'hidden',
  },
});

const navArrow = <Arrow tabIndex={0} />;

const PastEventsList = ({ pastEvents }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: navArrow,
    nextArrow: navArrow,
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
        '.slick-track': { marginLeft: 'initial', marginRight: 'initial' },
      }}>
      <Slider {...settings}>
        {pastEvents.map((event, index) => {
          let css;
          const isLastSlide = index === pastEvents.length - 1;

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
  pastEvents: PropTypes.arrayOf(PropTypes.shape(PastEvent.propTypes.event)),
};

PastEventsList.defaultProps = {
  pastEvents: [],
};

export default PastEventsList;
