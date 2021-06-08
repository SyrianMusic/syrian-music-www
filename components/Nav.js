import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Nav = ({ className, children }) => (
  <nav className={className}>
    {children}
    <style jsx>{`
      nav :global(a:link),
      nav :global(a:visited) {
        color: inherit;
        outline: none;
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: color 0.2s ease-in-out, text-decoration-color 0.2s ease-in-out;
      }

      nav :global(a:focus),
      nav :global(a:hover) {
        color: ${theme.color.interactive};
        text-decoration-color: ${theme.color.interactive};
      }

      nav :global(a:active) {
        filter: brightness(0.9);
      }

      nav :global(ul li > span) {
        color: ${theme.color.interactive};
      }
    `}</style>
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Nav.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Nav;
