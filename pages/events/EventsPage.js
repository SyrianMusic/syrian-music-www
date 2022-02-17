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
export const parseNode = (node, id = null, paragraphClass) => {
  switch (node?.nodeType) {
    case 'document':
      return node.content.map((node, id) => parseNode(node, id, paragraphClass));
    case 'heading-3':
      return parseHeading(node, id);
    case 'paragraph':
      return parseParagraph(node, id, paragraphClass);
    default:
      throw new Error(`Unhandled nodeType: ${node?.nodeType}`);
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
