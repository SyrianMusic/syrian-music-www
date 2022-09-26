import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import Typography, { SectionHeader } from '..';
import { gutterMarginStyles } from '../../../styles/mixins';

export default {
  title: 'Typography',
  component: Typography,
};

const documentationColor = theme.color.dimGray;
const border = `1px solid ${theme.color.black}`;

const Table = styled.table({
  border,
  color: documentationColor,
  fontFamily: 'monospace',
  margin: '1em auto',
  width: '100%',

  'th,td': {
    border,
    padding: '0.5em',
  },

  th: {
    backgroundColor: documentationColor,
    color: theme.color.white,
    fontWeight: 'bold',
  },

  'td:first-child': {
    fontWeight: 'bold',
  },
});

const Documentation = ({
  fontSizeMobile,
  fontSizeDesktop,
  lineHeightMobile,
  lineHeightDesktop,
}) => (
  <Table>
    <thead>
      <tr>
        <th></th>
        <th>Mobile</th>
        <th>Desktop</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>font-family</td>
        <td colSpan="2">{theme.font.family}</td>
      </tr>
      <tr>
        <td>font-weight</td>
        <td colSpan="2">{theme.font.weight}</td>
      </tr>
      <tr>
        <td>font-size</td>
        <td>{fontSizeMobile}px</td>
        <td>{fontSizeDesktop}px</td>
      </tr>
      <tr>
        <td>line-height</td>
        <td>{lineHeightMobile}px</td>
        <td>{lineHeightDesktop}px</td>
      </tr>
    </tbody>
  </Table>
);

Documentation.propTypes = {
  fontSizeMobile: PropTypes.number.isRequired,
  fontSizeDesktop: PropTypes.number.isRequired,
  lineHeightMobile: PropTypes.number.isRequired,
  lineHeightDesktop: PropTypes.number.isRequired,
};

const Section = styled.div({ marginTop: theme.spacing.get(24) });

const Title = ({ name, variant }) => (
  <Section>
    <SectionHeader>{name}</SectionHeader>

    <Typography variant={variant}>Lorem Ipsum</Typography>

    <Documentation {...theme.typography[variant]} />
  </Section>
);

Title.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const Body = ({ name, size }) => (
  <Section>
    <SectionHeader>{name}</SectionHeader>

    <Documentation {...theme.typography.body[size]} />

    <Typography size={size}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in commodo arcu. Etiam
      vestibulum rutrum lacus non elementum. Fusce eu eleifend urna.
    </Typography>

    <Typography size={size}>
      Proin eget malesuada dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Pellentesque quis justo <a href="#">nec augue imperdiet</a> dapibus.
      Praesent porttitor euismod volutpat. Aenean porttitor purus quis enim interdum, ac rhoncus
      arcu sagittis.
    </Typography>

    <Typography size={size}>
      Phasellus posuere sem in nunc iaculis lobortis. Duis sit amet odio eu ante ultricies
      scelerisque.
    </Typography>
  </Section>
);

Body.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export const All = () => {
  return (
    <div css={{ maxWidth: theme.layout.contentWidthMax, margin: '0 auto', padding: '2rem 0' }}>
      <div css={gutterMarginStyles}>
        <Typography variant="h1" textAlign="center">
          Typography
        </Typography>

        <Title name="H1" variant="h1" />

        <Title name="H3" variant="h3" />

        <Body size="lg" name="Body lg" />

        <Body size="md" name="Body md" />

        <Body size="sm" name="Body sm" />

        <Body size="xs" name="Body xs" />
      </div>
    </div>
  );
};
