import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Nav from './Nav';
import Typography from './Typography';

const Footer = ({ className, pathname }) => (
  <footer className={className}>
    <Nav className={cx('component-Footer-nav', 'gutters')}>
      <ul>
        {Object.values(config.nav).map((section) => {
          const sectionText = (
            <Typography size="lg" textAlign="left">
              {section.text}
            </Typography>
          );

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
                {section.text !== 'Education' &&
                  section.links &&
                  Object.values(section.links).map((link) => {
                    const linkText = (
                      <Typography size="lg" textAlign="left">
                        {link.text}
                      </Typography>
                    );
                    let linkEl;

                    if (/^\//.test(link.href)) {
                      linkEl = (
                        <Link href={`${section.href}${link.href}`}>
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
    <Typography className="component-Footer-copyright" textAlign="center">
      Copyright ©2017–{new Date(Date.now()).getFullYear()} Syrian Music Preservation Initiative
      Corp. 501(c)(3) <nobr>not-for-profit</nobr>&nbsp;organization
    </Typography>
    <style jsx>
      {`
        footer {
          padding-bottom: 2em;
          width: 100%;
        }

        :global(.component-Footer-nav) > ul {
          display: flex;
          justify-content: space-between;
        }

        :global(.component-Footer-nav) > ul > li:not(:last-child) {
          margin-right: ${theme.pxToRem(50)};
        }

        :global(.component-Footer-nav) ul li a,
        :global(.component-Footer-nav) ul li span {
          display: block;
        }

        :global(.component-Footer-nav) ul li ul {
          margin-top: 1em;
        }

        footer :global(.component-Footer-copyright) {
          font-size: ${theme.pxToRem(16)};
          line-height: ${theme.pxToRem(19)};
          margin: ${theme.pxToRem(50)} auto 0;
          padding: 0 ${theme.pxToRem(12)};
          width: ${theme.pxToRem(352 * 2)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          footer :global(.component-Footer-copyright) {
            padding: 0 ${theme.pxToRem(theme.layout.gutter.desktop)};
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
