import PropTypes from 'prop-types';
import { fontSizeLg } from '../styles/mixins';
import theme from '../styles/theme';
import Image from './Image';
import Typography from './Typography';
import { portableTextMap, portableTextPropType } from '../utils/text';

const Person = ({ className, bio, image, name, title }) => {
  return (
    <article className={className}>
      <h3>
        <Typography className="component-Person-name" as="span" size="lg" textAlign="left">
          {name}
          {title && ' '}
        </Typography>
        <Typography className="component-Person-title" as="span" size="md" textAlign="left">
          {title}
        </Typography>
      </h3>

      <div className="component-Person-description">
        <div className="component-Person-text">
          {Array.isArray(bio) &&
            bio.map(({ _key, children } = {}) => {
              return (
                <Typography key={_key} textAlign="left">
                  {children.map(portableTextMap)}
                </Typography>
              );
            })}
        </div>
        {image && <Image className="component-Person-image" {...image} />}
      </div>

      <style jsx>
        {`
          article {
            padding-left: ${theme.pxToRem(theme.layout.gutter.mobile.left)};
            padding-right: ${theme.pxToRem(theme.layout.gutter.mobile.right)};
          }

          h3 {
            margin-bottom: ${theme.pxToRem(14.5)};
          }

          h3 :global(.component-Person-name) {
            color: ${theme.color.salmon};
          }

          .component-Person-text > :global(p:last-child) {
            margin-bottom: ${theme.pxToRem(18 * 2)};
          }

          article :global(.component-Person-image) {
            height: auto;
            margin: 0 auto;
            width: ${theme.pxToRem(185)};
          }

          @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
            article {
              padding-left: ${theme.pxToRem(theme.layout.gutter.desktop)};
              padding-right: ${theme.pxToRem(80)};
            }

            h3 :global(.component-Person-name) {
              display: block;
              margin-bottom: 0;
            }

            h3 :global(.component-Person-title) {
              ${fontSizeLg};
            }

            .component-Person-description {
              display: flex;
              align-items: flex-start;
            }

            .component-Person-text {
              flex: 1;
              margin-right: ${theme.pxToRem(28)};
            }

            .component-Person-text > :global(p:last-child) {
              margin-bottom: 0;
            }

            article :global(.component-Person-image) {
              width: ${theme.pxToRem(370)};
            }
          }
        `}
      </style>
    </article>
  );
};

Person.propTypes = {
  className: PropTypes.string,
  bio: portableTextPropType.isRequired,
  image: PropTypes.shape(Image.propTypes),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Person.defaultProps = {
  className: undefined,
  image: undefined,
};

export default Person;
