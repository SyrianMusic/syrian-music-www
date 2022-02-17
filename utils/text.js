import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '../components/Typography';

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
          throw new Error('Unhandled mark:', mark.type);
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
  let content;
  switch (node?.nodeType) {
    case 'hyperlink':
      if (Array.isArray(node?.content) && node.content.length > 0) {
        content = node.content.map(parseContent);
      }

      return (
        <a key={id} href={node?.data?.uri} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    case 'text':
      return parseText(node, id);
    default:
      console.error('parseContent unhandled', node);
  }
};

const parseParagraph = (node, id, paragraphClass) => {
  if (!Array.isArray(node?.content)) {
    throw new Error();
  }

  return (
    <Typography className={paragraphClass} key={id} size="md">
      {node?.content?.length > 0 && node.content.map(parseContent)}
    </Typography>
  );
};

// TODO: Move to shared util
export const parseRichText = (node, id = null, paragraphClass) => {
  switch (node?.nodeType) {
    case 'document':
      return node.content.map((node, id) => parseRichText(node, id, paragraphClass));
    case 'heading-3':
      return parseHeading(node, id);
    case 'paragraph':
      return parseParagraph(node, id, paragraphClass);
    default:
      throw new Error(`Unhandled nodeType: ${node?.nodeType}`);
  }
};
