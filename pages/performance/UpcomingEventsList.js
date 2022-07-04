import PropTypes from 'prop-types';
import UpcomingEvent from './UpcomingEvent';
import theme from '../../styles/theme';

const UpcomingEventsList = ({ upcomingEvents }) => {
  return upcomingEvents.map((event) => (
    <UpcomingEvent
      key={event.sys.id}
      css={{
        marginTop: theme.pxToRem(36),
        marginBottom: theme.pxToRem(48),
        [theme.mq.mobileToDesktop]: {
          marginTop: theme.pxToRem(56),
          marginBottom: theme.pxToRem(84),
        },
      }}
      event={event}
    />
  ));
};

UpcomingEventsList.propTypes = {
  upcomingEvents: PropTypes.arrayOf(PropTypes.shape(UpcomingEvent.propTypes)),
};

UpcomingEventsList.defaultProps = {
  upcomingEvents: [],
};

export default UpcomingEventsList;
