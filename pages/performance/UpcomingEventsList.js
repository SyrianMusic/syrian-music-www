import PropTypes from 'prop-types';
import UpcomingEvent from './UpcomingEvent';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import { useCallback, useEffect, useState } from 'react';

const MAX_EVENTS = 3;

const carouselButtonStyles = {
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  paddingTop: theme.pxToRem(46),
  marginRight: '2px',
  width: '33%',
  maxWidth: theme.pxToRem(120),
};

const CarouselButton = ({ id, isSelected, onClick, selectEvent }) => {
  if (isSelected) {
    return <div css={{ ...carouselButtonStyles, borderBottomColor: theme.color.interactive }} />;
  }

  const handleClick = useCallback(() => {
    selectEvent(id);
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [id, selectEvent]);

  return (
    <Button
      css={{
        // Temporary override until Button is converted to Emotion
        '&&': {
          ...carouselButtonStyles,
          borderBottomColor: theme.color.lightGray,

          '&:active, &:focus, &:hover': {
            borderBottomColor: theme.color.interactive,
          },
        },
      }}
      onClick={handleClick}
    />
  );
};

CarouselButton.propTypes = {
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  selectEvent: PropTypes.func.isRequired,
};

CarouselButton.defaultProps = { isSelected: false };

const UpcomingEventsList = ({ upcomingEvents }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [shouldAutoplay, setShouldAutoplay] = useState(true);

  const events = upcomingEvents.slice(0, MAX_EVENTS);
  const hasMultipleEvents = events.length > 1;

  useEffect(() => {
    if (shouldAutoplay && hasMultipleEvents) {
      const advanceSlide = () => {
        if (currentEventIndex < events.length - 1) {
          setCurrentEventIndex(currentEventIndex + 1);
        } else {
          setCurrentEventIndex(0);
        }
      };

      setTimeout(advanceSlide, 5000);
      return () => {
        clearTimeout(advanceSlide);
      };
    }
  }, [currentEventIndex, hasMultipleEvents, shouldAutoplay]);

  const handleClick = () => {
    setShouldAutoplay(false);
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
      <UpcomingEvent event={events[currentEventIndex]} />
      {hasMultipleEvents && (
        <div css={{ display: 'flex' }}>
          {events.map((_, i) => (
            <CarouselButton
              key={i}
              id={i}
              isSelected={currentEventIndex === i}
              onClick={handleClick}
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
