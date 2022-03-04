import PropTypes from 'prop-types';
import Image from '../../../components/Image';
import Typography from '../../../components/Typography';
import theme from '../../../styles/theme';
import { parseRichText } from '../../../utils/text';

const Biography = ({ image, name, subtitle, biography }) => {
  return (
    <article
      css={{
        marginBottom: theme.pxToRem(30),
        '&:last-child': {
          marginBottom: 0,
        },
        [theme.mq.mobileToDesktop]: {
          marginBottom: theme.pxToRem(45),
        },
      }}>
      {image && (
        <Image
          css={{
            width: '100%',
            height: 'auto',
            [theme.mq.mobileToDesktop]: {
              float: 'right',
              marginLeft: theme.pxToRem(30),
              marginBottom: theme.pxToRem(45),
              width: '50%',
            },
          }}
          {...image}
        />
      )}

      <Typography
        css={{
          marginTop: theme.pxToRem(10),
          marginBottom: theme.pxToRem(10),
        }}
        size="lg">
        {name}
      </Typography>

      {subtitle && (
        <Typography
          css={{
            color: theme.color.accentTan,
          }}>
          {subtitle}
        </Typography>
      )}

      {biography && <div>{parseRichText(biography)}</div>}
    </article>
  );
};

Biography.propTypes = {
  image: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  biography: PropTypes.shape({}),
};

Biography.defaultProps = {
  subtitle: undefined,
  biography: undefined,
};

export default Biography;
