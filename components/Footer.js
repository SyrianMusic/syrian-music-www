import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';

const Footer = ({ pathname }) => (
  <footer>
    <nav>
      <ul>
        {config.nav.map((section) => {
          let sectionLink = (
            <Link href={section.href}>
              <a className="link">{section.text}</a>
            </Link>
          );

          if (pathname === section.href) {
            sectionLink = <span>{section.text}</span>;
          }

          return (
            <li key={section.text}>
              {sectionLink}

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
          );
        })}
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

        footer nav ul li a,
        footer nav ul li span {
          display: block;
        }

        footer nav ul li span {
          color: ${theme.color.salmon};
        }

        footer nav ul li ul {
          margin-top: 1em;
        }
      `}
    </style>
  </footer>
);

Footer.propTypes = {
  pathname: PropTypes.string,
};

Footer.defaultProps = {
  pathname: undefined,
};

export default Footer;
