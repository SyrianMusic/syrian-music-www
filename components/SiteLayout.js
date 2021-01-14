import Header from './Header';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const SiteLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <style global jsx>
      {`
        #__next {
          display: flex;
          flex-direction: column;
          height: 100%;
          max-width: ${theme.pxToRem(theme.layout.maxWidth)};
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
