import PropTypes from 'prop-types';
import PastEvents from './PastEvents';
import theme from '../../styles/theme';

const PastEventList = ({ pastEventItems }) => {
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
      <div css={{ display: 'flex' }}>
        {pastEventItems.map((event) => (
          <PastEvents key={event.sys.id} event={event} />
        ))}
      </div>
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
