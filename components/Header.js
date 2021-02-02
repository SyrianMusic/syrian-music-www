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
        <Image src="/images/logo.svg" width={102} height={192} />
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
          src="/images/logo-text.svg"
          alt="Syrian Music Preservation Initiative"
          width={378}
          height={188}
        />
      </a>
    </Link>
    <style jsx>{`
      header {
        display: flex;
        width: 100%;
      }

      .component-Header-logo {
        margin-right: ${theme.pxToRem(75)};
      }

      :global(.component-Header-nav) {
        border-bottom: 1px solid black;
        margin-bottom: ${theme.pxToRem(22)};
        flex: 1;
      }

      :global(.component-Header-nav) ul {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        font-size: ${theme.pxToRem(43)};
        line-height: ${theme.pxToRem(66)};
        height: 100%;
        padding: 0 ${theme.pxToRem(35)} ${theme.pxToRem(42)} ${theme.pxToRem(55)};
      }

      :global(.component-Header-nav) ul li:not(:last-child) {
        margin-right: ${theme.pxToRem(50)};
      }

      .component-Header-logo-text {
        margin-left: ${theme.pxToRem(66)};
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
