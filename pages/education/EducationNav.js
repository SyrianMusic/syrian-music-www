import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { UnstyledButton } from '../../components/Button';
import Image from '../../components/Image';
import Nav from '../../components/Nav';
import Rule from '../../components/Rule';
import Typography from '../../components/Typography';
import config from '../../config.yaml';
import theme from '../../styles/theme';

const EducationNavLink = ({ text, href, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const titleEl = (
    <Typography className="component-EducationNavLink-title" variant="h3" as="div">
      {text}
    </Typography>
  );

  const descriptionEl = (
    <Typography className="component-EducationNavLink-description" size="lg">
      {description}
    </Typography>
  );

  const contentEl =
    href === '/' ? (
      <div className="component-EducationNavLink-text">
        {titleEl}
        <div className="component-EducationNavLink-details">
          {descriptionEl}
          <Typography className="component-EducationNavLink-coming-soon" size="lg">
            Coming Soon
          </Typography>
        </div>
      </div>
    ) : (
      <Link href={`/education${href}`}>
        <a className="component-EducationNavLink-text">
          {titleEl}
          <div className="component-EducationNavLink-details">{descriptionEl}</div>
        </a>
      </Link>
    );

  return (
    <li className={cx({ expanded: isExpanded }, 'gutters')}>
      <UnstyledButton onClick={() => setIsExpanded(!isExpanded)}>
        <Image
          className="component-EducationNavLink-button-icon"
          src={isExpanded ? '/images/icons/minus.svg' : '/images/icons/plus.svg'}
          height={26}
          width={26}
        />
      </UnstyledButton>

      {contentEl}

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

        li:not(.expanded) :global(.component-EducationNavLink-title) {
          margin-bottom: 0;
        }

        li :global(.component-EducationNavLink-button-icon) {
          height: ${theme.pxToRem(26)};
          width: ${theme.pxToRem(26)};
        }

        li:not(.expanded) :global(.component-EducationNavLink-details) {
          display: none;
        }

        li :global(.component-EducationNavLink-coming-soon) {
          color: ${theme.color.interactive};
        }

        li :global(button) {
          float: right;
        }

        @media (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          li :global(button) {
            pointer-events: none;
          }

          li :global(.component-EducationNavLink-button-icon) {
            display: none;
          }

          li :global(.component-EducationNavLink-text) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          li :global(.component-EducationNavLink-title),
          li :global(.component-EducationNavLink-details) {
            flex: 1;
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
        <React.Fragment key={link.text}>
          <EducationNavLink text={link.text} href={link.href} description={link.description} />
          {i !== config.nav.education.links.length - 1 && <Rule />}
        </React.Fragment>
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
