import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Rule = ({ className }) => (
  <>
    <hr className={className} />
    <style jsx>{`
      hr {
        border-style: none;
        border-top: ${theme.pxToRem(1)} solid ${theme.color.black};
        margin: 0;
      }
    `}</style>
  </>
);

Rule.propTypes = { className: PropTypes.string };
Rule.defaultProps = { className: undefined };

export default Rule;
