import PropTypes from 'prop-types';
import { ruleStyle } from '../styles/variables';
import theme from '../styles/theme';

const Rule = ({ className }) => (
  <>
    <hr className={className} />
    <style jsx>{`
      hr {
        border-style: none;
        border-top: ${ruleStyle};
        margin: ${theme.pxToRem(25)} ${theme.pxToRem(22)};
      }

      @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        hr {
          margin: ${theme.pxToRem(25)} ${theme.pxToRem(47)};
        }
      }
    `}</style>
  </>
);

Rule.propTypes = { className: PropTypes.string };
Rule.defaultProps = { className: undefined };

export default Rule;
