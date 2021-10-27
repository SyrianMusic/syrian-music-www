import { Fragment } from 'react';
import PropTypes from 'prop-types';
import SiteLayout from '../../components/SiteLayout';
import Typography from '../../components/Typography';

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
          console.error('unhandled', mark);
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

const parseParagraph = (node, id) => {
  if (!Array.isArray(node?.content)) {
    throw new Error();
  }

  return <Typography key={id}>{node.content.length > 0 && node.content.map(parseText)}</Typography>;
};

const parseNode = (node, id = null) => {
  switch (node?.nodeType) {
    case 'document':
      return node.content.map(parseNode);
    case 'heading-3':
      return parseHeading(node, id);
    case 'paragraph':
      return parseParagraph(node, id);
    default:
      console.error('Unhandled', node);
  }
};

export const EventsPage = ({ content }) => {
  return (
    <SiteLayout>
      <div className="gutters">{parseNode(content)}</div>
    </SiteLayout>
  );
};

EventsPage.propTypes = {
  content: PropTypes.shape({}).isRequired,
};
