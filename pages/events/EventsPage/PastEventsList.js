import PropTypes from 'prop-types';
import Slider from 'react-slick';
import theme from '../../../styles/theme';
import carouselButton from './carouselButton';
import PastEvent from './PastEvent';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const propTypes = {
  pastEvents: PropTypes.arrayOf(PropTypes.shape(PastEvent.propTypes.event)),
};

const defaultProps = { pastEvents: [] };

const PastEventsList = ({ pastEvents }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: carouselButton,
    nextArrow: carouselButton,
    responsive: [
      {
        breakpoint: theme.breakpoint.mobileToDesktop,
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

PastEventsList.propTypes = propTypes;
PastEventsList.defaultProps = defaultProps;

export default PastEventsList;
