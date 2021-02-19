import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Image from './Image';
import Nav from './Nav';
import Typography from './Typography';

const outerMargin = 155;
const innerMargin = 70;

const VisualNav = ({ className }) => (
  <Nav className={className}>
    <ul>
      {Object.values(config.nav).map((section, i) => {
        const isFlipped = i % 2 != 0;
        const textAlign = isFlipped ? 'right' : 'left';

        return (
          <li key={section.text}>
            <Link href={section.href}>
              <a className={cx({ flipped: isFlipped })}>
                <div className="component-VisualNav-text">
                  <Typography textAlign={textAlign} variant="h3">
                    {section.text}
                  </Typography>
                  <Typography textAlign={textAlign}>{section.description}</Typography>
                </div>
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
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
    <style jsx>
      {`
        li {
          border-top: ${theme.pxToRem(1)} solid ${theme.color.black};
        }

        li:not(:last-child) {
          margin-bottom: ${theme.pxToRem(130)};
        }

        li a {
          display: grid;
          grid-template-columns: 50% 50%;
          text-decoration: none;
        }

        .component-VisualNav-text {
          margin: ${theme.pxToRem(96)} ${theme.pxToRem(theme.layout.gutterWidth.mobile)} 0;
        }

        .flipped .component-VisualNav-text {
          margin: ${theme.pxToRem(96)} ${theme.pxToRem(theme.layout.gutterWidth.mobile)} 0;
        }

        a.flipped .component-VisualNav-image-wrapper {
          grid-row: 1;
        }

        li a :global(.component-VisualNav-image) {
          height: auto;
          width: 100%;
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .component-VisualNav-text {
            margin-right: ${theme.pxToRem(innerMargin)};
            margin-left: ${theme.pxToRem(outerMargin)};
          }

          .flipped .component-VisualNav-text {
            margin-right: ${theme.pxToRem(outerMargin)};
            margin-left: ${theme.pxToRem(innerMargin)};
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
