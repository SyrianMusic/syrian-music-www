import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CarouselNavArrow from '../../components/CarouselNavArrow';
import PastEvents from './PastEvents';
import theme from '../../styles/theme';

const PastEventsList = ({ pastEventItems }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <CarouselNavArrow position="right" />,
    prevArrow: <CarouselNavArrow position="left" />,
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
        {pastEventItems.map((event) => (
          <PastEvents key={event.sys.id} event={event} />
        ))}
      </Slider>
    </div>
  );
};

PastEventsList.propTypes = {
  pastEventItems: PropTypes.arrayOf(PropTypes.shape(PastEvents.propTypes.event)),
};

PastEventsList.defaultProps = {
  pastEventItems: [],
};

export default PastEventsList;