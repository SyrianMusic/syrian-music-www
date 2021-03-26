import cx from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import config from '../config.yaml';
import theme from '../styles/theme';
import Image from './Image';
import Nav from './Nav';
import Rule from './Rule';
import Typography from './Typography';

const EducationNavLink = ({ text, href, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li key={text} className={cx({ expanded: isExpanded }, 'gutters')}>
      <Typography
        className="component-EducationNavLink-text"
        textAlign="left"
        variant="h3"
        as="div">
        {text}
      </Typography>

      <button onClick={() => setIsExpanded(!isExpanded)}>
        <Image
          src={isExpanded ? '/images/icons/minus.svg' : '/images/icons/plus.svg'}
          height={26}
          width={26}
        />
      </button>

      <div className="component-EducationNavLink-details">
        <Typography className="component-EducationNavLink-description" size="lg" textAlign="left">
          {description}
        </Typography>

        {href === '/' && (
          <Typography className="component-EducationNavLink-coming-soon" size="lg" textAlign="left">
            Coming Soon
          </Typography>
        )}
      </div>

      <style jsx>{`
        li {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: ${theme.pxToRem(25)};
          margin-bottom: ${theme.pxToRem(25)};
        }

        li:last-child {
          margin-bottom: 0;
        }

        li:not(.expanded) :global(.component-EducationNavLink-text) {
          margin-bottom: 0;
        }

        li:not(.expanded) .component-EducationNavLink-details {
          display: none;
        }

        li :global(.component-EducationNavLink-coming-soon) {
          color: ${theme.color.salmon};
        }

        button {
          -webkit-appearance: none;
          background-color: transparent;
          border: none;
          padding: 0;
          height: ${theme.pxToRem(26)};
          width: ${theme.pxToRem(26)};
        }

        @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          li :global(.component-EducationNavLink-text) {
            margin-bottom: 0;
          }

          button {
            display: none;
          }

          li :global(.component-EducationNavLink-text),
          .component-EducationNavLink-details {
            flex: 1;
          }

          li:not(.expanded) .component-EducationNavLink-details {
            display: block;
          }

          li :global(.component-EducationNavLink-coming-soon) {
            margin-top: ${theme.pxToRem(42.5)};
          }
        }
      `}</style>
    </li>
  );
};

EducationNavLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const EducationNav = ({ className }) => (
  <Nav className={className} aria-label="Education Menu">
    <ol>
      {config.nav.education.links.map((link, i) => (
        <>
          <EducationNavLink text={link.text} href={link.href} description={link.description} />
          {i !== config.nav.education.links.length - 1 && <Rule />}
        </>
      ))}
    </ol>
    <style jsx>{`
      ol {
        list-style-type: none;
      }
    `}</style>
  </Nav>
);

EducationNav.propTypes = {
  className: PropTypes.string,
};

EducationNav.defaultProps = {
  className: undefined,
};

export default EducationNav;
