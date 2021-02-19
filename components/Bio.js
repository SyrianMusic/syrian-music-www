import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Image from './Image';
import Typography from './Typography';

const innerMargin = 40;

const Bio = ({ className, flipped }) => {
  const textAlign = flipped ? 'left' : 'right';

  return (
    <article className={cx({ flipped }, className)}>
      <div className="component-Bio-text">
        <Typography className="component-Bio-title" variant="h3" textAlign={textAlign}>
          Samer Ali, Founder and Artistic Director
        </Typography>
        <Typography textAlign={textAlign}>
          A native of Syria, Dr. Samer Ali is a physician, Arab-violinist, musical director of Takht
          al-Nagham and founder and president of the Syrian Music Preservation&nbsp;Initiative.
        </Typography>
        <Typography textAlign={textAlign}>
          Samer led Takht al-Nagham in New York City at Alwan for the Arts, Scandinavia House, and
          Roulette Intermedium; and featured Syria&apos;s celebrated soprano Lubana al-Quntar at the
          Kennedy Center in Washington D.C. He currently performs with the National Arab Orchestra
          and the New York Arabic Orchestra. He began studying western classical violin at the age
          of eight with Fawaz al-Ali, and later pursued intensive conservatory studies with Ali
          Mukhtar Babayev. He studied the Arab violin and classical music traditions with Ali Farran
          and Ziad Ajjan (both students of prolific scholar Mahmoud Ajjan), composer Khaleel Haj
          Hussein, violinist and oudist Simon Shaheen, violinist Anwar Hariri, and scholar and
          oudist Muhammad Qadri&nbsp;Dalal.
        </Typography>
      </div>

      <Image
        className="component-Bio-image"
        src="/images/about-samer.jpg"
        width={739}
        height={1108}
      />

      <style jsx>
        {`
          article {
            padding: 0 ${theme.pxToRem(theme.layout.gutterWidth.mobile)};
          }

          .component-Bio-text > :global(p:last-child) {
            margin-bottom: 1.5em;
          }

          article :global(.component-Bio-image) {
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
};

Bio.defaultProps = {
  className: undefined,
  flipped: false,
};

export default Bio;
