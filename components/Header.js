import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import config from '../config.yaml';
import theme from '../styles/theme';
import Image from './Image';
import Nav from './Nav';
import Typography from './Typography';
import { typography } from '../styles/mixins';

const Header = ({ className, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  let handleClose;

  if (isOpen) {
    handleClose = () => setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isOpen]);

  return (
    <header className={cx({ 'is-open': isOpen }, className)}>
      <Link href="/">
        <button className="component-Header-logo-link" onClick={handleClose}>
          <Image
            className="component-Header-logo"
            alt="Syrian Music Preservation Initiative – Home"
            src="/images/logos/syrian-music-preservation-initiative-logo-icon.svg"
            width={51}
            height={96}
          />
        </button>
      </Link>
      <button className="component-Header-menu-button" onClick={() => setIsOpen(!isOpen)}>
        <Typography size="lg" as="span">
          Menu
        </Typography>
      </button>
      <Nav className="component-Header-nav">
        <ul>
          {Object.values(config.nav).map(({ href, text }) => {
            let navItem = (
              <Link href={href}>
                <button className="link" onClick={handleClose}>
                  {text}
                </button>
              </Link>
            );

            if (href === pathname) {
              navItem = <span>{text}</span>;
            }

            return <li key={text}>{navItem}</li>;
          })}
        </ul>
        <button onClick={handleClose}>
          <img src="/images/icons/close.svg" alt="Close the menu" height={30} width={30} />
        </button>
      </Nav>
      <Link href="/">
        <button className="component-Header-logo-text-link" onClick={handleClose}>
          <Image
            className="component-Header-logo-text"
            src="/images/logos/syrian-music-preservation-initiative-logo.svg"
            alt="Syrian Music Preservation Initiative – Home"
            width={189}
            height={94}
          />
        </button>
      </Link>
      <style jsx>{`
        header {
          display: flex;
          flex-shrink: 0;
          flex-wrap: wrap;
          margin: ${theme.pxToRem(18)} ${theme.pxToRem(24)} ${theme.pxToRem(32)};
        }

        .component-Header-logo-link {
          margin-right: ${theme.pxToRem(27)};
        }

        .component-Header-logo-link :global(.component-Header-logo) {
          height: auto;
          width: ${theme.pxToRem(28)};
        }

        button {
          -webkit-appearance: none;
          background: none;
          border: none;
          font: inherit;
          padding: 0;
        }

        .component-Header-menu-button {
          border-bottom: ${theme.pxToRem(1)} solid ${theme.color.black};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          padding: 0 0 ${theme.pxToRem(13)};
        }

        header.is-open .component-Header-menu-button {
          color: ${theme.color.salmon};
        }

        header :global(.component-Header-nav) {
          display: none;
        }

        header.is-open :global(.component-Header-nav) {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          height: calc(100vh - ${theme.pxToRem(76)});
          margin-top: ${theme.pxToRem(76)};
          order: 4;
          padding: ${theme.pxToRem(30)} ${theme.pxToRem(25)};
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 1000000;
        }

        header :global(.component-Header-nav) li {
          ${typography.h3.mobile};
          margin-bottom: 1em;
          text-align: right;
        }

        .component-Header-logo-text-link {
          margin-left: ${theme.pxToRem(25)};
        }

        .component-Header-logo-text-link :global(.component-Header-logo-text) {
          height: auto;
          width: ${theme.pxToRem(107.5)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          header {
            margin: ${theme.pxToRem(35)} ${theme.pxToRem(40)} ${theme.pxToRem(65)};
          }

          .component-Header-logo-link {
            margin-right: ${theme.pxToRem(37.5)};
          }

          .component-Header-logo-link :global(.component-Header-logo) {
            width: ${theme.pxToRem(51)};
          }

          .component-Header-menu-button {
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
            font-size: ${theme.pxToRem(21.5)};
            line-height: ${theme.pxToRem(33)};
            height: 100%;
          }

          header :global(.component-Header-nav) li {
            ${typography.lg.desktop};
            margin-bottom: ${theme.pxToRem(24)};
          }

          header :global(.component-Header-nav) > button {
            display: none;
          }

          .component-Header-logo-text-link {
            margin-left: ${theme.pxToRem(33)};
          }

          .component-Header-logo-text-link :global(.component-Header-logo-text) {
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
