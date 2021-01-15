import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from './Image';
import theme from '../styles/theme';

const HeaderLink = ({ className, href, isActive, text }) => (
  <li className={className}>
    {isActive ? (
      <span>{text}</span>
    ) : (
      <Link href={href}>
        <a disabled={isActive}>{text}</a>
      </Link>
    )}
    <style jsx>
      {`
        a {
          color: inherit;
          text-decoration-color: transparent;
          transition: color 0.2s ease-in-out, text-decoration-color 0.2s ease-in-out;
        }

        a:hover {
          text-decoration-color: ${theme.color.salmon};
          color: ${theme.color.salmon};
          text-decoration: underline;
        }

        span {
          color: ${theme.color.salmon};
        }
      `}
    </style>
  </li>
);

HeaderLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

HeaderLink.defaultProps = {
  className: undefined,
  isActive: false,
};

const headerLinks = [
  {
    href: '/education',
    text: 'Education',
  },
];

const Header = ({ className, pathname }) => (
  <header className={cx('component-Header-root', className)}>
    <Link href="/">
      <a className="component-Header-logo-link">
        <Image src="/images/logo.svg" width={102} height={192} />
      </a>
    </Link>
    <nav className="component-Header-nav">
      <ol>
        {headerLinks.map(({ href, text }) => (
          <HeaderLink
            key={text}
            className="header-link"
            href={href}
            text={text}
            isActive={href === pathname}
          />
        ))}
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
