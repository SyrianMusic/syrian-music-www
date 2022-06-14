import Link from 'next/link';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from 'components/Image';
import Nav from 'components/Nav';
import Typography from 'components/Typography';
import config from 'config.yaml';
import { gutters } from 'styles/mixins';
import theme from 'styles/theme';

export const HomeLinks = ({ className }) => (
  <Nav className={className}>
    <ul>
      {Object.values(config.nav).map((section, i) => {
        const isFlipped = i % 2 != 0;

        return (
          <li key={section.text}>
            <Link href={section.homeHref ?? section.href}>
              <a className={cx({ flipped: isFlipped })}>
                <div className="component-HomeLinks-image-wrapper">
                  {section.image && (
                    <Image
                      className="component-HomeLinks-image"
                      src={section.image.src}
                      srcSet={section.image.srcSet}
                      width={section.image.width}
                      height={section.image.height}
                    />
                  )}
                </div>
                <div className="component-HomeLinks-text">
                  <Typography className="component-HomeLinks-section-title" variant="h3">
                    {section.homeText ?? section.text}
                  </Typography>
                  <Typography className="component-HomeLinks-section-description" size="md">
                    {section.description}
                  </Typography>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
    <style jsx>
      {`
        li {
          ${gutters.margin.mobile};
          border-top: ${theme.pxToRem(1)} solid ${theme.color.black};
        }

        li:not(:last-child) {
          margin-bottom: ${theme.pxToRem(64)};
        }

        li a {
          display: block;
          text-decoration: none;
        }

        .component-HomeLinks-text {
          margin-top: ${theme.pxToRem(24)};
        }

        li a :global(.component-HomeLinks-image) {
          height: auto;
          width: 100%;
        }

        :global(.component-HomeLinks-text .component-HomeLinks-section-title) {
          margin-bottom: ${theme.pxToRem(8)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          li {
            margin-left: ${theme.pxToRem(48)};
            margin-right: ${theme.pxToRem(48)};
          }

          li a {
            display: flex;
          }

          li a:not(.flipped) {
            flex-direction: row-reverse;
          }

          .component-HomeLinks-image-wrapper,
          .component-HomeLinks-text {
            flex: 1;
          }

          .component-HomeLinks-text {
            margin-top: ${theme.pxToRem(48)};
          }

          :global(.component-HomeLinks-section-title),
          :global(.component-HomeLinks-section-description) {
            padding-left: ${theme.pxToRem(32)};
            padding-right: ${theme.pxToRem(32)};
          }

          :global(.component-HomeLinks-text .component-HomeLinks-section-title) {
            margin-bottom: ${theme.pxToRem(20)};
          }
        }
      `}
    </style>
  </Nav>
);

HomeLinks.propTypes = {
  className: PropTypes.string,
};

HomeLinks.defaultProps = {
  className: undefined,
};
