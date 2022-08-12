import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PastEvents from './PastEvents';
import theme from '../../styles/theme';

const PastEventList = ({ pastEventItems }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
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

PastEventList.propTypes = {
  pastEventItems: PropTypes.arrayOf(PropTypes.shape(PastEvents.propTypes.event)),
};

PastEventList.defaultProps = {
  pastEventItems: [],
};

export default PastEventList;
