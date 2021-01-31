import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Nav from './Nav';

const Footer = ({ className, pathname }) => (
  <footer className={className}>
    <Nav className="component-Footer-nav">
      <ul>
        {Object.values(config.nav).map((section) => {
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
                {section.text !== 'Education' &&
                  section.links &&
                  Object.values(section.links).map((link) => {
                    let linkEl;

                    if (/^\//.test(link.href)) {
                      linkEl = (
                        <Link href={`${section.href}${link.href}`}>
                          <a>{link.text}</a>
                        </Link>
                      );
                    } else {
                      linkEl = (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.text}
                        </a>
                      );
                    }

                    return <li key={link.text}>{linkEl}</li>;
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Nav>
    <style jsx>
      {`
        footer {
          font-size: ${theme.pxToRem(44)};
          line-height: ${theme.pxToRem(53)};
          padding: 0 ${theme.pxToRem(155)} ${theme.pxToRem(114)};
        }

        :global(.component-Footer-nav) > ul {
          display: flex;
          justify-content: flex-end;
        }

        :global(.component-Footer-nav) > ul > li:not(:last-child) {
          margin-right: ${theme.pxToRem(100)};
        }

        :global(.component-Footer-nav) ul li a,
        :global(.component-Footer-nav) ul li span {
          display: block;
        }

        :global(.component-Footer-nav) ul li ul {
          margin-top: 1em;
        }
      `}
    </style>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
  pathname: PropTypes.string,
};

Footer.defaultProps = {
  className: undefined,
  pathname: undefined,
};

export default Footer;
