import PropTypes from 'prop-types';
import { fontSizeLg } from '../styles/mixins';
import theme from '../styles/theme';
import Image from './Image';
import Typography from './Typography';

const Bio = ({ className, image, name, text, title }) => {
  return (
    <article className={className}>
      <h3>
        <Typography className="component-Bio-name" as="span" size="lg" textAlign="left">
          {name}
          {title && ' '}
        </Typography>
        <Typography className="component-Bio-title" as="span" size="md" textAlign="left">
          {title}
        </Typography>
      </h3>

      <div className="component-Bio-description">
        <div className="component-Bio-text">
          {/* TODO: Create util for rendering paragraphs */}
          {text
            .trim()
            .split('\n')
            .map((p) => (
              <Typography key={p.substring(0, 20)} textAlign="left">
                {p.trim()}
              </Typography>
            ))}
        </div>
        <Image className="component-Bio-image" {...image} />
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

          h3 :global(.component-Bio-name) {
            color: ${theme.color.salmon};
          }

          .component-Bio-text > :global(p:last-child) {
            margin-bottom: ${theme.pxToRem(18 * 2)};
          }

          article :global(.component-Bio-image) {
            height: auto;
            margin: 0 auto;
            width: ${theme.pxToRem(370)};
          }

          @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
            article {
              padding-left: ${theme.pxToRem(theme.layout.gutter.desktop)};
              padding-right: ${theme.pxToRem(80)};
            }

            h3 :global(.component-Bio-name),
            h3 :global(.component-Bio-name:not(:last-child)) {
              display: block;
              margin-bottom: 0;
            }

            h3 :global(.component-Bio-title) {
              ${fontSizeLg};
            }

            .component-Bio-description {
              display: flex;
              align-items: flex-start;
            }

            .component-Bio-text {
              flex: 1;
              margin-right: ${theme.pxToRem(28)};
            }

            .component-Bio-text > :global(p:last-child) {
              margin-bottom: 0;
            }
          }
        `}
      </style>
    </article>
  );
};

Bio.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape(Image.propTypes).isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Bio.defaultProps = {
  className: undefined,
};

export default Bio;
