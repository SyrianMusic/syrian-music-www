import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import { gutters } from '../styles/mixins';
import theme from '../styles/theme';
import { ruleStyle } from '../styles/variables';
import Image from './Image';
import Nav from './Nav';
import Typography from './Typography';

const VisualNav = ({ className }) => (
  <Nav className={className}>
    <ul>
      {Object.values(config.nav).map((section, i) => {
        const isFlipped = i % 2 != 0;

        return (
          <li key={section.text}>
            <Link href={section.href}>
              <a className={cx({ flipped: isFlipped })}>
                <div className="component-VisualNav-image-wrapper">
                  {section.image && (
                    <Image
                      className="component-VisualNav-image"
                      src={section.image.src}
                      srcSet={section.image.srcSet}
                      width={section.image.width}
                      height={section.image.height}
                    />
                  )}
                </div>
                <div className="component-VisualNav-text">
                  <Typography className="component-VisualNav-section-title" variant="h3">
                    {section.homeText ?? section.text}
                  </Typography>
                  <Typography className="component-VisualNav-section-description" size="lg">
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
          border-top: ${ruleStyle};
        }

        li:not(:last-child) {
          margin-bottom: ${theme.pxToRem(64)};
        }

        li a {
          display: block;
          text-decoration: none;
        }

        .component-VisualNav-text {
          margin-top: ${theme.pxToRem(48)};
        }

        li a :global(.component-VisualNav-image) {
          height: auto;
          width: 100%;
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

          .component-VisualNav-image-wrapper,
          .component-VisualNav-text {
            flex: 1;
          }

          .component-VisualNav-text {
            margin-top: ${theme.pxToRem(48)};
          }

          :global(.component-VisualNav-section-title),
          :global(.component-VisualNav-section-description) {
            padding-left: ${theme.pxToRem(32)};
            padding-right: ${theme.pxToRem(32)};
          }

          :global(.component-VisualNav-text .component-VisualNav-section-title) {
            margin-bottom: ${theme.pxToRem(48)};
          }
        }
      `}
    </style>
  </Nav>
);

VisualNav.propTypes = {
  className: PropTypes.string,
};

VisualNav.defaultProps = {
  className: undefined,
};

export default VisualNav;
