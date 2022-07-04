import PropTypes from 'prop-types';

const Video = ({ className, id, title }) => (
  <div
    className={className}
    css={{
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '56.25%',
    }}>
    <iframe
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
      }}
      title={title}
      src={`https://www.youtube.com/embed/${id}?color=white&playsinline=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Video.defaultProps = {
  className: undefined,
};

export default Video;
