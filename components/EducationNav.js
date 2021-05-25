import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import config from '../config.yaml';
import theme from '../styles/theme';
import Button from './Button';
import Image from './Image';
import Nav from './Nav';
import Rule from './Rule';
import Typography from './Typography';

const EducationNavLink = ({ text, href, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let content = (
    <div className="component-EducationNavLink-content">
      <Typography className="component-EducationNavLink-text" variant="h3" as="div">
        {text}
      </Typography>

      <Button onClick={() => setIsExpanded(!isExpanded)}>
        <Image
          src={isExpanded ? '/images/icons/minus.svg' : '/images/icons/plus.svg'}
          height={26}
          width={26}
        />
      </Button>

      <div className="component-EducationNavLink-details">
        <Typography className="component-EducationNavLink-description" size="lg">
          {description}
        </Typography>

        {href === '/' && (
          <Typography className="component-EducationNavLink-coming-soon" size="lg">
            Coming Soon
          </Typography>
        )}
      </div>
      <style jsx>{`
        .component-EducationNavLink-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        div :global(.component-EducationNavLink-text),
        .component-EducationNavLink-details {
          flex: 1;
        }

        div :global(.component-EducationNavLink-text) {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );

  return (
    <li key={text} className={cx({ expanded: isExpanded }, 'gutters')}>
      {href === '/' ? (
        content
      ) : (
        <Link href={`/education${href}`}>
          <a>{content}</a>
        </Link>
      )}
      <style jsx>{`
        li {
          margin-top: ${theme.pxToRem(25)};
          margin-bottom: ${theme.pxToRem(25)};
        }

        li:last-child {
          margin-bottom: 0;
        }

        li a {
          text-decoration: none;
        }

        li:not(.expanded) :global(.component-EducationNavLink-text) {
          margin-bottom: 0;
        }

        li:not(.expanded) :global(.component-EducationNavLink-details) {
          display: none;
        }

        li :global(.component-EducationNavLink-coming-soon) {
          color: ${theme.color.salmon};
        }

        li :global(button) {
          height: ${theme.pxToRem(26)};
          width: ${theme.pxToRem(26)};
        }

        @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          li :global(button) {
            display: none;
          }

          li:not(.expanded) :global(.component-EducationNavLink-details) {
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
