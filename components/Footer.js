import Link from 'next/link';
import config from '../config.yaml';
import theme from '../styles/theme';

const Footer = () => (
  <footer>
    <nav>
      <ul>
        {config.nav.map((section) => (
          <li key={section.text}>
            <Link href={section.href}>
              <a className="link">{section.text}</a>
            </Link>

            <ul>
              {section.links.map((link) => (
                <li key={link.text}>
                  <Link href={`${section.href}${link.href}`}>
                    <a className="link">{link.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
    <style jsx>
      {`
        footer {
          font-size: ${theme.pxToRem(44)};
          line-height: ${theme.pxToRem(53)};
          padding: 0 ${theme.pxToRem(155)} ${theme.pxToRem(114)};
        }

        footer nav > ul {
          display: flex;
          justify-content: flex-end;
        }

        footer nav > ul > li:not(:last-child) {
          margin-right: ${theme.pxToRem(100)};
        }

        footer nav > ul > li > a {
          display: inline-block;
          margin-bottom: 1em;
        }
      `}
    </style>
  </footer>
);

export default Footer;
