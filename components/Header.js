import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import theme from '../styles/theme';

const Header = () => (
  <>
    <header className="header">
      <Link href="/">
        <a>
          <Logo className="header__logo" />
        </a>
      </Link>
      <nav className="header__nav" />
      <Link href="/">
        <a>
          <Image src="/images/logo-text.svg" alt="" width={378} height={187} />
        </a>
      </Link>
    </header>
    <style jsx>{`
      .header {
        display: flex;
        margin: ${theme.pxToRem(70)} auto 0;
        width: 100%;
        max-width: ${theme.pxToRem(theme.layout.maxWidth - 88 * 2)};
      }

      .header__nav {
        flex: 1;
      }
    `}</style>
  </>
);

export default Header;
