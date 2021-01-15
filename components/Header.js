import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from './Image';

const Header = ({ className }) => (
  <header className={cx('component-Header-root', className)}>
    <Link href="/">
      <a>
        <Image src="/images/logo.svg" width={102} height={192} />
      </a>
    </Link>
    <nav className="component-Header-nav" />
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
      .component-Header-root {
        display: flex;
        width: 100%;
      }

      .component-Header-root a {
        overflow: hidden;
      }

      .component-Header-nav {
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
