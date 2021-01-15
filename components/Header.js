import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from './Image';

const Header = ({ className }) => (
  <header className={`header ${className}`}>
    <Link href="/">
      <a>
        <Image className="header__logo" src="/images/logo.svg" width={102} height={192} />
      </a>
    </Link>
    <nav className="header__nav" />
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
      .header {
        display: flex;
        width: 100%;
      }

      a {
        overflow: hidden;
      }

      .header__nav {
        flex: 1;
      }
    `}</style>
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: undefined,
};

export default Header;
