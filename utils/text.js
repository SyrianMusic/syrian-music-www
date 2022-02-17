import React from 'react';
import PropTypes from 'prop-types';

export const MARKS = {
  BOLD: 'bold',
  ITALIC: 'italic',
  UNDERLINE: 'underline',
  CODE: 'code',
};

// TODO: Can remove once switched off of local data
export const portableTextMap = ({ _key, text, marks } = {}) => {
  let formattedText = text;

  if (marks?.includes(MARKS.BOLD)) {
    formattedText = <strong>{formattedText}</strong>;
  }

  if (marks?.includes(MARKS.ITALIC)) {
    formattedText = <em>{formattedText}</em>;
  }

  if (marks?.includes(MARKS.UNDERLINE)) {
    formattedText = <u>{formattedText}</u>;
  }

  return <React.Fragment key={_key}>{formattedText}</React.Fragment>;
};

export const portableTextPropType = PropTypes.arrayOf(
  PropTypes.shape({
    _type: PropTypes.string,
    _key: PropTypes.string.isRequired,
    style: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        _type: PropTypes.string,
        _key: PropTypes.string,
        text: PropTypes.string.isRequired,
        marks: PropTypes.arrayOf(PropTypes.oneOf(Object.values(MARKS))),
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
