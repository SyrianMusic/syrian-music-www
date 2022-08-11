import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { gutters } from '../styles/mixins';
import theme from '../styles/theme';
import Image from './Image';
import Typography from './Typography';
import Video from './Video';

const mediaClass = css({
  height: 'auto',
  width: '100%',
});

const Hero = ({ className, children, image, subtitle, title, video }) => (
  <div
    css={{
      [theme.mq.mobileToDesktop]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: theme.pxToRem(730.5),
      },
    }}
    className={className}>
    {title && (
      <Typography
        css={{
          marginBottom: theme.pxToRem(22),
        }}
        variant="h1"
        textAlign="center">
        {title}
      </Typography>
    )}
    <figure>
      {image && <Image css={mediaClass} {...image} />}
      {video && <Video css={mediaClass} {...video} />}
    </figure>
    {subtitle && (
      <figcaption
        css={{
          marginTop: theme.pxToRem(27.5),
          marginLeft: theme.pxToRem(22),
          marginRight: theme.pxToRem(22),
          [theme.mq.mobileToDesktop]: {
            marginLeft: 0,
            marginRight: 0,
          },
        }}>
        {subtitle}
      </figcaption>
    )}
    {children && (
      <div
        css={css`
          ${gutters.margin.mobile};
          margin-top: ${theme.pxToRem(25)};

          ${theme.mq.mobileToDesktop} {
            margin-left: 0;
            margin-right: 0;
          }
        `}>
        {children}
      </div>
    )}
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.shape(Image.propTypes),
  subtitle: PropTypes.node,
  title: PropTypes.node,
  video: PropTypes.shape(Video.propTypes),
};

Hero.defaultProps = {
  className: undefined,
  children: undefined,
  image: undefined,
  subtitle: undefined,
  title: undefined,
  video: undefined,
};

export default Hero;
