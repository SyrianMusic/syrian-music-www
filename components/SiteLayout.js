import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Footer from './Footer';
import Header from './Header';

const SiteLayout = ({ className, children, pathname }) => (
  <>
    <Header className="component-SiteLayout-header" pathname={pathname} />
    <main className={className}>{children}</main>
    <Footer className="component-SiteLayout-footer" pathname={pathname} />
    <style global jsx>
      {`
        html {
          font-size: ${theme.font.mobile.fontSizeMin}px;
        }

        // calc([min size]px + ([max size] - [min size]) * ((100vw - [min viewport width]px) / ([max viewport width] - [min viewport width])));
        // https://css-tricks.com/snippets/css/fluid-typography/

        @media screen and (min-width: ${theme.layout.contentWidthMin}px) {
          html {
            font-size: calc(
              ${theme.font.mobile.fontSizeMin}px +
                (${theme.font.mobile.fontSizeMax} - ${theme.font.mobile.fontSizeMin}) *
                (
                  (100vw - ${theme.layout.contentWidthMin}px) /
                    (${theme.breakpoint.mobileToDesktop} - ${theme.layout.contentWidthMin})
                )
            );
          }
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          html {
            font-size: calc(
              ${theme.font.desktop.fontSizeMin}px +
                (${theme.font.desktop.fontSizeMax} - ${theme.font.desktop.fontSizeMin}) *
                (
                  (100vw - ${theme.breakpoint.mobileToDesktop}px) /
                    (${theme.layout.contentWidthMax} - ${theme.breakpoint.mobileToDesktop})
                )
            );
          }
        }

        @media screen and (min-width: ${theme.layout.contentWidthMax}px) {
          html {
            font-size: ${theme.font.desktop.fontSizeMax}px;
          }
        }

        #root,
        #__next {
          display: flex;
          flex-direction: column;
          height: 100%;
          max-width: ${theme.layout.contentWidthMax}px;
          margin: 0 auto;
        }

        main {
          flex: 1 0 auto;
        }

        .component-SiteLayout-footer {
          flex-shrink: 0;
          width: 100%;
        }
      `}
    </style>
  </>
);

SiteLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  pathname: PropTypes.string,
};

SiteLayout.defaultProps = {
  className: undefined,
  children: undefined,
  pathname: undefined,
};

export default SiteLayout;
