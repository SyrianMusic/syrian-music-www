import Header from './Header';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const SiteLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
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
      `}
    </style>
    <style jsx>
      {`
        .footer {
          flex-shrink: 0;
        }
      `}
    </style>
  </>
);

SiteLayout.propTypes = {
  children: PropTypes.node,
};

SiteLayout.defaultProps = {
  children: undefined,
};

export default SiteLayout;
