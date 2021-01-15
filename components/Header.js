import Link from 'next/link';
import Image from './Image';
import theme from '../styles/theme';

const Header = () => (
  <>
    <header className="header">
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
            alt="Syrian Music Preservation Institute"
            width={378}
            height={187}
          />
        </a>
      </Link>
    </header>
    <style jsx>{`
      .header {
        display: flex;
        margin: ${theme.pxToRem(70)} auto 0;
        padding-left: ${theme.pxToRem(88)};
        padding-right: ${theme.pxToRem(88)};
        width: 100%;
      }

      a {
        overflow: hidden;
      }

      .header__nav {
        flex: 1;
      }
    `}</style>
  </>
);

export default Header;
