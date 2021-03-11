import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Image from './Image';
import Typography from './Typography';

const innerMargin = 20;

const Bio = ({ className, flipped, image, text, title }) => {
  return (
    <article className={cx({ flipped }, className)}>
      <div className="component-Bio-text">
        <Typography className="component-Bio-title" variant="h3">
          {title}
        </Typography>
        {text
          .trim()
          .split('\n')
          .map((p) => (
            <Typography key={p.substring(0, 20)}>{p.trim()}</Typography>
          ))}
      </div>

      <Image className="component-Bio-image" {...image} />

      <style jsx>
        {`
          article {
            padding: 0 ${theme.pxToRem(theme.layout.gutterWidth.mobile)};
          }

          .component-Bio-text > :global(p:last-child) {
            margin-bottom: 1.5em;
          }

          article :global(.component-Bio-image) {
            height: auto;
            width: ${theme.pxToRem(370)};
            margin-left: auto;
          }

          @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
            article {
              display: flex;
              flex-direction: row-reverse;
              align-items: flex-end;
              padding-right: ${theme.pxToRem(theme.layout.gutterWidth.desktop)};
              padding-left: 0;
            }

            article.flipped {
              flex-direction: row;
              padding-right: 0;
              padding-left: ${theme.pxToRem(theme.layout.gutterWidth.desktop)};
            }

            .component-Bio-text {
              flex: 1;
              margin-left: ${theme.pxToRem(innerMargin)};
            }

            article.flipped .component-Bio-text :global(h3),
            article.flipped .component-Bio-text :global(p) {
              text-align: left;
            }

            .component-Bio-text > :global(p:last-child) {
              margin-bottom: 0;
            }

            article.flipped .component-Bio-text {
              margin-right: ${theme.pxToRem(innerMargin)};
              margin-left: 0;
            }
          }
        `}
      </style>
    </article>
  );
};

Bio.propTypes = {
  className: PropTypes.string,
  flipped: PropTypes.bool,
  image: PropTypes.shape(Image.propTypes).isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Bio.defaultProps = {
  className: undefined,
  flipped: false,
};

export default Bio;
