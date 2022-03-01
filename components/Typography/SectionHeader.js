import PropTypes from 'prop-types';
import { Typography } from './Typography';
import theme from '../../styles/theme';

export const SectionHeader = ({ className, children, as }) => {
  return (
    <Typography className={className} as={as}>
      <span className="component-SectionHeader-wrapper">{children}</span>
      <style jsx>{`
        .component-SectionHeader-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: ${theme.pxToRem(20)};
          line-height: ${theme.pxToRem(35)};
        }

        .component-SectionHeader-wrapper:after {
          background-color: ${theme.color.accentTan};
          content: '';
          flex: 1;
          height: ${theme.pxToRem(1)};
          margin-top: ${theme.pxToRem(3)};
          margin-left: ${theme.pxToRem(14)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .component-SectionHeader-wrapper {
            font-size: ${theme.pxToRem(22)};
            line-height: ${theme.pxToRem(25)};
          }
        }
      `}</style>
    </Typography>
  );
};

SectionHeader.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

SectionHeader.defaultProps = {
  as: 'h3',
  className: undefined,
  children: undefined,
};
