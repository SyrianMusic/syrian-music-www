import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import config from '../config.yaml';
import Image from './Image';
import theme from '../styles/theme';

const Header = ({ className, pathname }) => (
  <header className={cx('component-Header-root', className)}>
    <Link href="/">
      <a className="component-Header-logo-link">
        <Image src="/images/logo.svg" width={102} height={192} />
      </a>
    </Link>
    <nav className="component-Header-nav">
      <ol>
        {config.nav.map(({ href, text }) => {
          if (href === pathname) {
            return <span key={text}>{text}</span>;
          }
          return (
            <Link key={text} href={href}>
              <a className="link">{text}</a>
            </Link>
          );
        })}
      </ol>
    </nav>
    <Link href="/">
      <a className="component-Header-logo-text-link">
        <Image
          src="/images/logo-text.svg"
          alt="Syrian Music Preservation Initiative"
          width={378}
          height={187}
        />
      </a>
    </Link>
    <style jsx>{`
      .component-Header-root {
        display: flex;
        width: 100%;
      }

      .component-Header-logo-link {
        margin-right: ${theme.pxToRem(75)};
      }

      .component-Header-nav {
        border-bottom: 1px solid black;
        margin-bottom: ${theme.pxToRem(22)};
        flex: 1;
      }

      ol {
        display: flex;
        align-items: flex-end;
        font-size: ${theme.pxToRem(43)};
        line-height: ${theme.pxToRem(66)};
        height: 100%;
        padding: 0 ${theme.pxToRem(35)} ${theme.pxToRem(42)} ${theme.pxToRem(55)};
      }

      .component-Header-root :global(.header-link) {
        margin-right: ${theme.pxToRem(50)};
      }

      .component-Header-logo-text-link {
        margin-left: ${theme.pxToRem(66)};
      }

      span {
        color: ${theme.color.salmon};
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
