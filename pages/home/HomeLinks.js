import PropTypes from 'prop-types';
import Link from 'next/link';
import { css } from '@emotion/react';
import Image from '../../components/Image';
import Nav from '../../components/Nav';
import Typography from '../../components/Typography';
import config from '../../config.yaml';
import { gutters } from '../../styles/mixins';
import theme from '../../styles/theme';

const textClass = css({
  [theme.mq.mobileToDesktop]: {
    paddingLeft: theme.pxToRem(32),
    paddingRight: theme.pxToRem(32),
  },
});

const HomeLinks = ({ className }) => (
  <Nav className={className}>
    <ul>
      {Object.values(config.nav).map((section, i) => {
        const isFlipped = i % 2 != 0;

        return (
          <li
            key={section.text}
            css={[
              gutters.margin.mobile,
              {
                borderTop: `${theme.pxToRem(1)} solid ${theme.color.black}`,

                '&:not(:last-child)': {
                  marginBottom: theme.pxToRem(64),
                },

                [theme.mq.mobileToDesktop]: {
                  marginLeft: theme.pxToRem(48),
                  marginRight: theme.pxToRem(48),
                },
              },
            ]}>
            <Link href={section.homeHref ?? section.href}>
              <a
                css={{
                  display: 'block',
                  textDecoration: 'none',

                  [theme.mq.mobileToDesktop]: {
                    display: 'flex',
                    flexDirection: isFlipped ? 'row' : 'row-reverse',
                  },
                }}>
                <div
                  css={{
                    [theme.mq.mobileToDesktop]: {
                      flex: 1,
                    },
                  }}>
                  {section.image && (
                    <Image
                      css={{
                        height: 'auto',
                        width: '100%',
                      }}
                      src={section.image.src}
                      srcSet={section.image.srcSet}
                      width={section.image.width}
                      height={section.image.height}
                    />
                  )}
                </div>
                <div
                  css={{
                    marginTop: theme.pxToRem(24),

                    [theme.mq.mobileToDesktop]: {
                      flex: 1,
                      marginTop: theme.pxToRem(48),
                    },
                  }}>
                  <Typography
                    css={[
                      textClass,
                      {
                        marginBottom: theme.pxToRem(8),

                        [theme.mq.mobileToDesktop]: {
                          marginBottom: theme.pxToRem(20),
                        },
                      },
                    ]}
                    variant="h3">
                    {section.homeText ?? section.text}
                  </Typography>
                  <Typography css={textClass} size="md">
                    {section.description}
                  </Typography>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  </Nav>
);

HomeLinks.propTypes = {
  className: PropTypes.string,
};

HomeLinks.defaultProps = {
  className: undefined,
};

export default HomeLinks;
