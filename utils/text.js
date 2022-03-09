import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '../components/Typography';
import logger from '../utils/logger';

export const EM_DASH = '\u2013';

export const MARKS = {
  BOLD: 'bold',
  ITALIC: 'italic',
  UNDERLINE: 'underline',
  CODE: 'code',
};

export const DEFAULT_COMPOSER_ENGLISH = {
  firstName: 'Unknown',
  lastName: 'composer',
};

export const DEFAULT_COMPOSER_ARABIC = {
  firstName: 'مجهول',
  lastName: 'المؤلف',
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

const parseText = (node, id) => {
  let el = node.value;

  if (Array.isArray(node?.marks)) {
    node.marks.forEach((mark) => {
      switch (mark?.type) {
        case 'bold':
          el = <strong>{el}</strong>;
          break;
        case 'italic':
          el = <em>{el}</em>;
          break;
        case 'underline':
          el = <u>{el}</u>;
          break;
        default:
          logger.error(new Error('[parseText] Unhandled mark:' + mark?.type));
      }
    });
  }

  return <Fragment key={id}>{el}</Fragment>;
};

const parseHeading = (node, id) => {
  if (!Array.isArray(node?.content)) {
    throw new Error();
  }

  return (
    <Typography key={id} variant="h3">
      {node.content.length > 0 && node.content.map(parseText)}
    </Typography>
  );
};

const parseContent = (node, id) => {
  switch (node?.nodeType) {
    case 'hyperlink':
      if (!Array.isArray(node?.content) || node.content.length === 0) return null;

      return (
        <a key={id} href={node?.data?.uri} target="_blank" rel="noopener noreferrer">
          {node.content.map(parseContent)}
        </a>
      );
    case 'text':
      return parseText(node, id);
    default:
      logger.error(new Error('[parseContent] unhandled nodeType: ' + node?.nodeType));
  }
};

const parseParagraph = (node, id, options = {}) => {
  if (!Array.isArray(node?.content)) return null;

  const { className, size = 'md' } = options;
  return (
    <Typography className={className} key={id} size={size}>
      {node?.content?.length > 0 && node.content.map(parseContent)}
    </Typography>
  );
};

export const parseRichText = (node, id = null, options = {}) => {
  switch (node?.nodeType) {
    case 'document':
      return node.content.map((node, id) => parseRichText(node, id, options));
    case 'heading-3':
      return parseHeading(node, id);
    case 'paragraph':
      return parseParagraph(node, id, options?.paragraph);
    default:
      logger.error(new Error(`[parseRichText] Unhandled nodeType: ${node?.nodeType}`));
  }
};
