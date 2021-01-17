import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Image from './Image';

const Header = ({ className, pathname }) => (
  <header className={className}>
    <Link href="/">
      <a>
        <Image src="/images/logo.svg" width={102} height={192} />
      </a>
    </Link>
    <nav className="component-Header-nav">
      <ol>
        {config.nav.map(({ href, text }) => {
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
      </ol>
    </nav>
    <Link href="/">
      <a>
        <Image
          src="/images/logo-text.svg"
          alt="Syrian Music Preservation Initiative"
          width={378}
          height={187}
        />
      </a>
    </Link>
    <style jsx>{`
      header {
        display: flex;
        width: 100%;
      }

      header > a:first-child {
        margin-right: ${theme.pxToRem(75)};
      }

      nav {
        border-bottom: 1px solid black;
        margin-bottom: ${theme.pxToRem(22)};
        flex: 1;
      }

      nav ol {
        display: flex;
        align-items: flex-end;
        font-size: ${theme.pxToRem(43)};
        line-height: ${theme.pxToRem(66)};
        height: 100%;
        padding: 0 ${theme.pxToRem(35)} ${theme.pxToRem(42)} ${theme.pxToRem(55)};
      }

      nav ol li:not(:last-child) {
        margin-right: ${theme.pxToRem(50)};
      }

      nav ol li span {
        color: ${theme.color.salmon};
      }

      header > a:last-child {
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
