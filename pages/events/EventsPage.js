import PropTypes from 'prop-types';
import SiteLayout from '../../components/SiteLayout';
import { parseRichText } from '../../utils/text';

export const EventsPage = ({ content }) => {
  return (
    <SiteLayout>
      <div className="gutters">{parseRichText(content)}</div>
    </SiteLayout>
  );
};

EventsPage.propTypes = {
  content: PropTypes.shape({}).isRequired,
};
