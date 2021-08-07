import cx from 'classnames';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import config from '../config.yaml';
import * as mixins from '../styles/mixins';
import theme from '../styles/theme';
import { ruleStyle } from '../styles/variables';
import Button from './Button';
import Image from './Image';
import Nav from './Nav';
import Typography from './Typography';

const Header = ({ className, pathname }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleNavigate = (href) => () => {
    router.push(href);
    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isOpen]);

  return (
    <header className={cx({ 'is-open': isOpen }, className)}>
      <Button className="component-Header-logo-link" onClick={handleNavigate('/')}>
        <Image
          className="component-Header-logo"
          alt="Syrian Music Preservation Initiative – Home"
          src="/images/logos/syrian-music-preservation-initiative-logo-icon.svg"
          width={51}
          height={96}
        />
      </Button>
      <Button className="component-Header-menu-button" onClick={() => setIsOpen(!isOpen)}>
        <Typography size="lg" as="span">
          Menu
        </Typography>
      </Button>
      <Nav className="component-Header-nav">
        <ul>
          {Object.values(config.nav).map(({ href, text }) => {
            let navItem = (
              <Button className="component-Header-nav-button" onClick={handleNavigate(href)}>
                {text}
              </Button>
            );

            if (href === pathname) {
              navItem = <span>{text}</span>;
            }

            return <li key={text}>{navItem}</li>;
          })}
        </ul>
        <Button className="component-Header-close-menu-button" onClick={handleClose}>
          <Image src="/images/icons/close.svg" alt="Close the menu" height={30} width={30} />
        </Button>
      </Nav>
      <Button className="component-Header-logo-text-link" onClick={handleNavigate('/')}>
        <Image
          className="component-Header-logo-text"
          src="/images/logos/syrian-music-preservation-initiative-logo.svg"
          alt="Syrian Music Preservation Initiative – Home"
          width={189}
          height={94}
        />
      </Button>
      <style jsx>{`
        header {
          display: flex;
          flex-shrink: 0;
          flex-wrap: wrap;
          margin: ${theme.pxToRem(18)} ${theme.pxToRem(24)} ${theme.pxToRem(32)};
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
          padding: ${theme.pxToRem(30)} ${theme.pxToRem(25)};
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
            margin: ${theme.pxToRem(35)} ${theme.pxToRem(40)} ${theme.pxToRem(65)};
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
            border-bottom: ${ruleStyle};
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
