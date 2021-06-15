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

  const descriptionEl = (
    <Typography className="component-EducationNavLink-description" size="lg">
      {description}
    </Typography>
  );

  return (
    <li key={text} className={cx({ expanded: isExpanded }, 'gutters')}>
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        <Typography className="component-EducationNavLink-title" variant="h3" as="div">
          {text}
        </Typography>

        <Image
          className="component-EducationNavLink-button-icon"
          src={isExpanded ? '/images/icons/minus.svg' : '/images/icons/plus.svg'}
          height={26}
          width={26}
        />
      </Button>

      <div className="component-EducationNavLink-details">
        {href === '/' ? (
          <>
            {descriptionEl}
            <Typography className="component-EducationNavLink-coming-soon" size="lg">
              Coming Soon
            </Typography>
          </>
        ) : (
          <Link href={`/education${href}`}>
            <a>{descriptionEl}</a>
          </Link>
        )}
      </div>

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

        li :global(button) {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        li :global(button):active,
        li :global(button):focus,
        li :global(button):hover {
          color: ${theme.color.primary};
          text-decoration: none;
        }

        li:not(.expanded) :global(.component-EducationNavLink-title) {
          margin-bottom: 0;
        }

        li :global(.component-EducationNavLink-button-icon) {
          height: ${theme.pxToRem(26)};
          width: ${theme.pxToRem(26)};
        }

        li:not(.expanded) .component-EducationNavLink-details {
          display: none;
        }

        .component-EducationNavLink-details :global(a):link,
        .component-EducationNavLink-details :global(a):visited {
          color: ${theme.color.interactive};
        }

        li :global(.component-EducationNavLink-coming-soon) {
          color: ${theme.color.salmon};
        }

        @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          li {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          li :global(button) {
            pointer-events: none;
          }

          li :global(.component-EducationNavLink-button-icon) {
            display: none;
          }

          li :global(button),
          li .component-EducationNavLink-details {
            flex: 1;
          }

          li:not(.expanded) .component-EducationNavLink-details {
            display: block;
          }

          .component-EducationNavLink-details :global(a):link,
          .component-EducationNavLink-details :global(a):visited {
            color: ${theme.color.primary};
          }

          .component-EducationNavLink-details :global(a):active,
          .component-EducationNavLink-details :global(a):focus,
          .component-EducationNavLink-details :global(a):hover {
            color: ${theme.color.interactive};
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
