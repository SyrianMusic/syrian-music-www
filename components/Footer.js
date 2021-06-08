import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Nav from './Nav';
import NewsletterSignup from './NewsletterSignup';
import Typography from './Typography';

const Footer = ({ className, pathname }) => (
  <footer className={className}>
    <NewsletterSignup className="component-Footer-newsletter-signup" />

    <Nav className={cx('component-Footer-nav', 'gutters')}>
      <ul>
        {Object.values(config.nav).map((section) => {
          const sectionText = <Typography size="lg">{section.text}</Typography>;

          let sectionLink = (
            <Link href={section.href}>
              <a className="link">{sectionText}</a>
            </Link>
          );

          if (pathname === section.href) {
            sectionLink = <span>{sectionText}</span>;
          }

          return (
            <li key={section.text}>
              {sectionLink}

              <ul>
                {section.links &&
                  Object.values(section.links).map((link) => {
                    const linkText = <Typography size="lg">{link.text}</Typography>;
                    let linkEl;

                    if (link.href === '/') {
                      return null;
                    }

                    const relativeLink = `${section.href}${link.href}`;

                    if (pathname === relativeLink) {
                      linkEl = <span>{linkText}</span>;
                    } else if (/^\//.test(link.href)) {
                      linkEl = (
                        <Link href={relativeLink}>
                          <a>{linkText}</a>
                        </Link>
                      );
                    } else {
                      linkEl = (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {linkText}
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
    <Typography className={cx('component-Footer-copyright', 'gutters')} textAlign="center">
      ©2017–{new Date(Date.now()).getFullYear()} Syrian Music Preservation Initiative Corp.
      501(c)(3) <nobr>not-for-profit</nobr>&nbsp;organization
    </Typography>
    <style jsx>
      {`
        footer {
          margin-top: ${theme.pxToRem(32)};
          padding-bottom: 2em;
          width: 100%;
        }

        footer :global(.component-Footer-newsletter-signup) {
          border-bottom: ${theme.pxToRem(1)} solid ${theme.color.black};
        }

        :global(.component-Footer-nav) {
          padding-top: ${theme.pxToRem(25)};
        }

        :global(.component-Footer-nav) > ul {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        :global(.component-Footer-nav) > ul > li:not(:last-child) {
          font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeMobile)};
          margin-bottom: 2em;
        }

        :global(.component-Footer-nav) ul li a,
        :global(.component-Footer-nav) ul li span {
          display: block;
        }

        :global(.component-Footer-nav) ul li ul {
          display: none;
        }

        footer :global(.component-Footer-copyright) {
          margin-top: ${theme.pxToRem(48)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          :global(.component-Footer-nav) > ul {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }

          :global(.component-Footer-nav) > ul > li:not(:last-child) {
            margin-right: ${theme.pxToRem(50)};
          }

          :global(.component-Footer-nav) ul li ul {
            display: block;
            margin-top: 1em;
          }

          footer :global(.component-Footer-copyright) {
            font-size: ${theme.pxToRem(16)};
            line-height: ${theme.pxToRem(19)};
          }
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
