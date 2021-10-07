import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../../config.yaml';
import theme from '../../styles/theme';
import * as mixins from '../../styles/mixins';
import LogoLockup from '../../icons/LogoLockup';
import FacebookIcon from '../../icons/Facebook';
import InstagramIcon from '../../icons/Instagram';
import YouTubeIcon from '../../icons/YouTube';
import Nav from '../Nav';
import NewsletterSignup from '../NewsletterSignup';
import Rule from '../Rule';
import Typography from '../Typography';

export const Footer = ({ className, pathname }) => (
  <footer className={className}>
    <NewsletterSignup />

    <div className="component-Footer-content">
      <Nav className={cx('component-Footer-nav')}>
        <ul>
          <div className="component-Footer-text-links">
            {Object.values(config.nav).map((section) => {
              const sectionText = <Typography size="lg">{section.text}</Typography>;

              let sectionLink = (
                <Link href={section.href}>
                  <a className="component-Footer-section-title">{sectionText}</a>
                </Link>
              );

              if (pathname === section.href) {
                sectionLink = <span className="component-Footer-section-title">{sectionText}</span>;
              }

              return (
                <li key={section.text} className="component-Footer-section">
                  {sectionLink}

                  <ul>
                    {section.links &&
                      Object.values(section.links).map((link) => {
                        const { showInFooter = true } = link;
                        if (!showInFooter) return null;

                        const linkText = <Typography size="md">{link.text}</Typography>;
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
          </div>
          <div className="component-Footer-icons">
            <li className="component-Footer-logo-lockup">
              <Link href="/">
                <a>
                  <LogoLockup className="component-Footer-logo-lockup-icon" />
                </a>
              </Link>
            </li>
            <div className="component-Footer-social-links">
              <li>
                <a
                  href={config.nav.connect.links.facebook.href}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href={config.nav.connect.links.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCyunR06UosVBwrHx7c6UYIw"
                  target="_blank"
                  rel="noopener noreferrer">
                  <YouTubeIcon />
                </a>
              </li>
            </div>
          </div>
        </ul>
      </Nav>

      <Rule className={cx('component-Footer-rule', 'gutters')} />

      <Typography
        className={cx('component-Footer-copyright', 'gutters')}
        textAlign="center"
        size="sm">
        ©2017–{new Date(Date.now()).getFullYear()} Syrian Music Preservation Initiative Corp.
        501(c)(3) <nobr>not-for-profit</nobr>&nbsp;organization
      </Typography>
    </div>
    <style jsx>
      {`
        footer {
          margin-top: ${theme.pxToRem(32)};
          padding-bottom: 2em;
          width: 100%;
        }

        :global(.component-Footer-nav) {
          padding-top: ${theme.pxToRem(25)};
        }

        :global(.component-Footer-nav) > ul,
        .component-Footer-text-links {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .component-Footer-section {
          font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeMobile)};
          margin-bottom: ${theme.pxToRem(24)};
        }

        :global(.component-Footer-nav) ul li a,
        :global(.component-Footer-nav) ul li span {
          display: block;
        }

        :global(.component-Footer-nav) ul li ul {
          display: none;
        }

        .component-Footer-logo-lockup {
          display: none;
        }

        .component-Footer-social-links {
          display: flex;
          justify-content: space-between;
          width: ${theme.pxToRem(182)};
        }

        .component-Footer-social-links li {
          height: ${theme.pxToRem(45)};
          width: ${theme.pxToRem(45)};
        }

        .component-Footer-social-links li :global(svg) {
          height: auto;
          width: 100%;
        }

        footer :global(.component-Footer-rule) {
          border-color: ${theme.color.accentTan};
          display: none;
        }

        footer :global(.component-Footer-copyright) {
          margin: ${theme.pxToRem(20)} auto 0;
          width: ${theme.pxToPercent(236, theme.layout.contentWidthMin)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .component-Footer-content {
            ${mixins.layout.fullWidth};
            padding-left: ${theme.pxToRem(25)};
            padding-right: ${theme.pxToRem(25)};
          }

          footer :global(.component-Footer-nav),
          footer :global(.component-Footer-rule) {
            // TODO: Set this for header as well
            max-width: ${theme.pxToRem(1118)};
          }

          footer :global(.component-Footer-nav) {
            margin-left: auto;
            margin-right: auto;
            padding-top: ${theme.pxToRem(45)};
          }

          :global(.component-Footer-nav) > ul,
          .component-Footer-text-links {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }

          .component-Footer-section {
            margin-right: ${theme.pxToRem(20)};
          }

          .component-Footer-section :global(a.component-Footer-section-title) {
            color: ${theme.color.accentTan};
          }

          .component-Footer-section :global(a.component-Footer-section-title):active,
          .component-Footer-section :global(a.component-Footer-section-title):focus,
          .component-Footer-section :global(a.component-Footer-section-title):hover {
            color: ${theme.color.interactive};
          }

          footer :global(.component-Footer-nav) ul li ul {
            display: block;
            margin-top: 1em;
          }

          .component-Footer-text-links {
            flex: 1;
            order: 2;
          }

          .component-Footer-icons {
            order: 1;
            margin-right: ${theme.pxToRem(74.5)};
          }

          .component-Footer-logo-lockup {
            display: block;
          }

          .component-Footer-logo-lockup :global(.component-Footer-logo-lockup-icon) {
            width: ${theme.pxToRem(272)};
          }

          .component-Footer-social-links {
            margin: ${theme.pxToRem(37.8)} auto 0;
          }

          footer :global(.component-Footer-rule) {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }

          footer :global(.component-Footer-copyright) {
            margin: 0 auto;
            width: 100%;
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
