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
            variant="h3"
            as="div">
            {link.text}
          </Typography>
          <Typography className="component-EducationNav-link-description" size="lg">
            {link.description}
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
        padding: ${theme.pxToRem(63)} 0 ${theme.pxToRem(31.5)};
      }

      li :global(.component-EducationNav-link-description) {
        text-align: left;
      }

      @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        ol li {
          display: grid;
          align-items: center;
          grid-template-columns: 50% 50%;
        }

        li :global(.component-EducationNav-link-text:not(:last-child)) {
          margin-bottom: 0;
        }

        li :global(.component-EducationNav-link-description) {
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
