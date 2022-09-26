import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import config from '../config.yaml';
import * as mixins from '../styles/mixins';
import theme from '../styles/theme';
import Image from './Image';
import Nav from './Nav';
import Typography from './Typography';
import UnstyledButton from './UnstyledButton';

const Header = ({ className, pathname }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);
  const closeMenu = useCallback(() => setIsMenuOpen(false));

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isMenuOpen]);

  return (
    <header className={cx({ 'is-open': isMenuOpen }, className)}>
      <Link href="/">
        <UnstyledButton className="component-Header-logo-link" as="a" onClick={closeMenu}>
          <Image
            className="component-Header-logo"
            alt="Syrian Music Preservation Initiative – Home"
            src="/images/logos/syrian-music-preservation-initiative-logo-icon.svg"
            width={51}
            height={96}
          />
        </UnstyledButton>
      </Link>
      <UnstyledButton className="component-Header-menu-button" onClick={toggleMenu}>
        <Typography size="lg" as="span">
          Menu
        </Typography>
      </UnstyledButton>
      <Nav className="component-Header-nav">
        <ul>
          {Object.values(config.nav).map(({ href, text }) => {
            let navItem = (
              <Link href={href}>
                <UnstyledButton className="component-Header-nav-button" as="a">
                  {text}
                </UnstyledButton>
              </Link>
            );

            if (href === pathname) {
              navItem = <span>{text}</span>;
            }

            return <li key={text}>{navItem}</li>;
          })}
        </ul>
        <UnstyledButton className="component-Header-close-menu-button" onClick={closeMenu}>
          <Image src="/images/icons/close.svg" alt="Close the menu" height={32} width={32} />
        </UnstyledButton>
      </Nav>
      <Link href="/">
        <UnstyledButton className="component-Header-logo-text-link" as="a" onClick={closeMenu}>
          <Image
            className="component-Header-logo-text"
            src="/images/logos/syrian-music-preservation-initiative-logo.svg"
            alt="Syrian Music Preservation Initiative – Home"
            width={189}
            height={94}
          />
        </UnstyledButton>
      </Link>
      <style jsx>{`
        header {
          display: flex;
          flex-shrink: 0;
          flex-wrap: wrap;
          margin: ${theme.spacing.get(16)} ${theme.spacing.get(24)} ${theme.spacing.get(32)};
        }

        header :global(.component-Header-logo-link) {
          margin-right: ${theme.pxToRem(27)};
        }

        header :global(.component-Header-logo) {
          height: auto;
          width: ${theme.pxToRem(28)};
        }

        header :global(.component-Header-menu-button) {
          border-bottom: ${theme.pxToRem(1)} solid ${theme.color.primary};
          color: ${theme.color.primary};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          padding: 0 0 ${theme.pxToRem(13)};
        }

        header.is-open :global(.component-Header-menu-button) {
          color: ${theme.color.interactive};
        }

        header :global(.component-Header-nav) {
          display: none;
        }

        header.is-open :global(.component-Header-nav) {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          height: calc(100vh - ${theme.pxToRem(76)});
          margin-top: ${theme.pxToRem(76)};
          order: 4;
          padding: ${theme.spacing.get(32)} ${theme.spacing.get(24)};
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 1000000;
        }

        header :global(.component-Header-nav) li {
          ${mixins.typography.h3.mobile};
          margin-bottom: 1em;
        }

        header :global(.component-Header-nav-button) {
          font-size: inherit;
        }

        header :global(.component-Header-close-menu-button) {
          position: absolute;
          bottom: ${theme.pxToRem(100)};
        }

        header :global(.component-Header-logo-text-link) {
          margin-left: ${theme.pxToRem(25)};
        }

        header :global(.component-Header-logo-text) {
          height: auto;
          width: ${theme.pxToRem(107.5)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          header {
            margin: ${theme.spacing.get(32)} ${theme.spacing.get(40)} ${theme.spacing.get(64)};
          }

          header :global(.component-Header-logo-link) {
            margin-right: ${theme.pxToRem(37.5)};
          }

          header :global(.component-Header-logo-link .component-Header-logo) {
            width: ${theme.pxToRem(51)};
          }

          header :global(.component-Header-menu-button) {
            display: none;
          }

          header :global(.component-Header-nav) {
            display: block;
            border-bottom: 1px solid black;
            margin-bottom: ${theme.pxToRem(11)};
            flex: 1;
          }

          header :global(.component-Header-nav) ul {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: space-around;
            height: 100%;
          }

          header :global(.component-Header-nav) li {
            ${mixins.typography.lg.desktop};
            margin-bottom: ${theme.pxToRem(24)};
          }

          header :global(.component-Header-close-menu-button) {
            display: none;
          }

          header :global(.component-Header-logo-text-link) {
            margin-left: ${theme.pxToRem(33)};
          }

          header :global(.component-Header-logo-text) {
            width: ${theme.pxToRem(189)};
          }
        }
      `}</style>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  pathname: PropTypes.string,
};

Header.defaultProps = {
  className: undefined,
  pathname: undefined,
};

export default Header;
