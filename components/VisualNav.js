import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Image from './Image';
import Nav from './Nav';
import Typography from './Typography';

const outerMargin = 155;
const innerMargin = 50;

const VisualNav = ({ className }) => (
  <Nav className={className}>
    <ul>
      {config.nav.map((section, i) => {
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
          margin: ${theme.pxToRem(96)} ${theme.pxToRem(innerMargin)} 0 ${theme.pxToRem(outerMargin)};
        }

        .flipped .component-VisualNav-text {
          margin: ${theme.pxToRem(96)} ${theme.pxToRem(outerMargin)} 0 ${theme.pxToRem(innerMargin)};
        }

        a.flipped .component-VisualNav-image-wrapper {
          grid-row: 1;
        }

        li a :global(.component-VisualNav-image) {
          height: auto;
          width: 100%;
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
