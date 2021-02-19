import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Typography from './Typography';

const EducationNav = ({ className }) => (
  <nav className={className} aria-label="Education Menu">
    <ol>
      {config.nav.education.links.map((link) => (
        <li key={link.text} className="gutters">
          <Typography
            className="component-EducationNav-link-text"
            textAlign="left"
            variant="h1"
            as="div">
            {link.text}
          </Typography>
          <Typography className="component-EducationNav-coming-soon" variant="h1" as="div">
            Coming Soon
          </Typography>
        </li>
      ))}
    </ol>
    <style jsx>{`
      ol {
        list-style-type: none;
      }

      ol li {
        border-top: ${theme.pxToRem(1)} solid ${theme.color.black};
        padding: ${theme.pxToRem(126)} 0 ${theme.pxToRem(63)};
      }

      li :global(.component-EducationNav-coming-soon) {
        opacity: 0.5;
        text-align: left;
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        ol li {
          display: grid;
          grid-template-columns: 50% 50%;
        }

        li :global(.component-EducationNav-coming-soon) {
          text-align: right;
        }
      }
    `}</style>
  </nav>
);

EducationNav.propTypes = {
  className: PropTypes.string,
};

EducationNav.defaultProps = {
  className: undefined,
};

export default EducationNav;
