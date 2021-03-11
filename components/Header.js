import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Image from './Image';
import Nav from './Nav';

const Header = ({ className, pathname }) => (
  <header className={className}>
    <Link href="/">
      <a className="component-Header-logo">
        <Image
          alt="Syrian Music Preservation Initiative – Home"
          src="/images/logos/syrian-music-preservation-initiative-logo-icon.svg"
          width={51}
          height={96}
        />
      </a>
    </Link>
    <Nav className="component-Header-nav">
      <ul>
        {Object.values(config.nav).map(({ href, text }) => {
          let navItem = (
            <Link href={href}>
              <a className="link">{text}</a>
            </Link>
          );

          if (href === pathname) {
            navItem = <span>{text}</span>;
          }

          return <li key={text}>{navItem}</li>;
        })}
      </ul>
    </Nav>
    <Link href="/">
      <a className="component-Header-logo-text">
        <Image
          src="/images/logos/syrian-music-preservation-initiative-logo.svg"
          alt="Syrian Music Preservation Initiative – Home"
          width={189}
          height={94}
        />
      </a>
    </Link>
    <style jsx>{`
      header {
        display: flex;
        flex-shrink: 0;
        width: 100%;
      }

      .component-Header-logo {
        margin-right: ${theme.pxToRem(37.5)};
      }

      :global(.component-Header-nav) {
        border-bottom: 1px solid black;
        margin-bottom: ${theme.pxToRem(11)};
        flex: 1;
      }

      :global(.component-Header-nav) ul {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        font-size: ${theme.pxToRem(21.5)};
        line-height: ${theme.pxToRem(33)};
        height: 100%;
        padding: 0 ${theme.pxToRem(17.5)} ${theme.pxToRem(21)} ${theme.pxToRem(27.5)};
      }

      :global(.component-Header-nav) ul li:not(:last-child) {
        margin-right: ${theme.pxToRem(25)};
      }

      .component-Header-logo-text {
        margin-left: ${theme.pxToRem(33)};
      }
    `}</style>
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
  pathname: PropTypes.string,
};

Header.defaultProps = {
  className: undefined,
  pathname: undefined,
};

export default Header;
