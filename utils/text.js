import PropTypes from 'prop-types';

export const portableTextMap = ({ text } = {}) => {
  return text;
};

export const portableTextPropType = PropTypes.arrayOf(
  PropTypes.shape({
    _type: PropTypes.string,
    key: PropTypes.string.isRequired,
    style: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        _type: PropTypes.string,
        _key: PropTypes.string,
        text: PropTypes.string.isRequired,
        marks: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    markDefs: PropTypes.arrayOf(
      PropTypes.shape({
        _type: PropTypes.string.isRequired,
        _key: PropTypes.string.isRequired,
        href: PropTypes.string,
      }),
    ),
  }),
);
