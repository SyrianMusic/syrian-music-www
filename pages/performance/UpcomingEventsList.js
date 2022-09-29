import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { UnstyledButton } from '../../components/Button';
import theme from '../../styles/theme';
import UpcomingEvent from './UpcomingEvent';

const MAX_EVENTS = 3;

const carouselButtonStyles = {
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  paddingTop: theme.pxToRem(46),
  marginRight: '2px',
  width: '33%',
  maxWidth: theme.pxToRem(120),
};

const CarouselButton = ({ id, isSelected, selectEvent }) => {
  if (isSelected) {
    return <div css={{ ...carouselButtonStyles, borderBottomColor: theme.color.interactive }} />;
  }

  const onClick = useCallback(() => {
    selectEvent(id);
  }, [id, selectEvent]);

  return (
    <UnstyledButton
      css={[
        carouselButtonStyles,
        {
          borderBottomColor: theme.color.lightGray,

          '&:active, &:focus, &:hover': {
            borderBottomColor: theme.color.interactive,
          },
        },
      ]}
      onClick={onClick}
    />
  );
};

CarouselButton.propTypes = {
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  selectEvent: PropTypes.func.isRequired,
};

CarouselButton.defaultProps = { isSelected: false };

const UpcomingEventsList = ({ upcomingEvents }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const maxEvents = upcomingEvents.slice(0, MAX_EVENTS);
  const hasMultipleEvents = maxEvents.length > 1;

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
      <UpcomingEvent event={maxEvents[currentEventIndex]} />
      {hasMultipleEvents && (
        <div css={{ display: 'flex' }}>
          {maxEvents.map((_, i) => (
            <CarouselButton
              key={i}
              id={i}
              isSelected={currentEventIndex === i}
              selectEvent={setCurrentEventIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

UpcomingEventsList.propTypes = {
  upcomingEvents: PropTypes.arrayOf(PropTypes.shape(UpcomingEvent.propTypes.event)),
};

UpcomingEventsList.defaultProps = {
  upcomingEvents: [],
};

export default UpcomingEventsList;
