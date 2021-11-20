import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../styles/theme';

const buttonResetStyles = css`
  -webkit-appearance: none;
  background: none;
  border: none;
  font: inherit;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const Button = styled.button`
  ${buttonResetStyles};

  color: ${theme.color.primary};
  font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeMobile)};
  line-height: 1em;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: all 0.2s ease-in-out;

  :hover,
  :focus,
  :active {
    color: ${theme.color.interactive};
  }

  :hover,
  :focus {
    text-decoration-color: ${theme.color.interactive};
  }

  :focus {
    opacity: 0.75;
  }

  :active {
    text-decoration-color: transparent;
  }

  :disabled {
    color: ${theme.color.disabled};
    cursor: not-allowed;
  }

  ${theme.mq.md} {
    font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeDesktop)};
  }
`;
