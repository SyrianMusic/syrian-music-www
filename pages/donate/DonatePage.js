import PropTypes from 'prop-types';
import SiteLayout from '../../components/SiteLayout';

const DonatePage = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <SiteLayout>
      <form onSubmit={handleSubmit}>
        <button type="submit">Donate</button>
      </form>
    </SiteLayout>
  );
};

DonatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DonatePage;
