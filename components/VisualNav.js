import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import config from '../config.yaml';
import theme from '../styles/theme';
import Image from './Image';

const VisualNav = ({ className }) => (
  <nav className={className}>
    <ul>
      {config.nav.map((section, i) => (
        <li key={section.text}>
          <Link href={section.href}>
            <a className={cx('link', { 'component-VisualNav-flipped': i % 2 != 0 })}>
              <div>
                <h3>{section.text}</h3>
                <p>{section.description}</p>
              </div>
              <div>
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
      ))}
    </ul>
    <style jsx>
      {`
        li {
          border-top: ${theme.pxToRem(1)} solid ${theme.color.black};
        }

        li:not(:last-child) {
          margin-bottom: ${theme.pxToRem(130)};
        }

        li a:link,
        li a:visited,
        li a:hover {
          text-decoration: none;
        }

        li a {
          display: grid;
          grid-template-columns: 50% 50%;
        }

        li a div:first-child {
          margin: ${theme.pxToRem(96)} ${theme.pxToRem(115)} 0 ${theme.pxToRem(155)};
        }

        .component-VisualNav-flipped div:last-child {
          grid-row: 1;
        }

        li a :global(.component-VisualNav-image) {
          height: auto;
          width: 100%;
        }

        h3 {
          font-size: ${theme.pxToRem(70)};
          line-height: ${theme.pxToRem(84)};
          margin-bottom: 1em;
        }

        p {
          font-size: ${theme.pxToRem(41)};
          line-height: ${theme.pxToRem(49)};
        }
      `}
    </style>
  </nav>
);

VisualNav.propTypes = {
  className: PropTypes.string,
};

VisualNav.defaultProps = {
  className: undefined,
};

export default VisualNav;
