import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button } from './Button';
import theme from '../../styles/theme';

export const PrimaryButton = styled(Button)`
  background-color: ${theme.color.interactive};
  border: ${theme.pxToRem(1)} solid ${theme.color.interactive};
  color: ${theme.color.white};
  height: ${theme.pxToRem(64)};
  padding: 0 ${theme.pxToRem(20)};
  text-decoration: none;

  :hover,
  :focus,
  :disabled {
    color: ${theme.color.white};
  }

  :enabled:focus,
  :enabled:hover {
    box-shadow: 0px 3px 6px ${theme.color.withOpacity(theme.color.black, 0.38)};
  }

  :active {
    background-color: ${theme.color.white};
    color: ${theme.color.interactive};
  }

  :disabled {
    background-color: ${theme.color.disabled};
    border-color: ${theme.color.disabled};
  }
`;

PrimaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PrimaryButton.defaultProps = {
  className: undefined,
  children: undefined,
};
