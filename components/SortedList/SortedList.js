import PropTypes from 'prop-types';
import Typography from '../Typography';
import theme from '../../styles/theme';

export const SortedList = ({ className, sections }) => (
  <ul className={className}>
    {Array.isArray(sections) &&
      sections.map((section) => (
        <li key={section.id} className="component-SortedList-section">
          <Typography className="component-SortedList-section-title" size="lg">
            {section.title}
          </Typography>

          {Array.isArray(section.items) && (
            <ul>
              {section.items.map((item) => {
                let text = item.text;

                if (item.href) {
                  text = <a href={item.href}>{text}</a>;
                }

                return (
                  <li key={item.id} className="component-SortedList-item">
                    <Typography>{text}</Typography>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      ))}
    <style jsx>{`
      .component-SortedList-section :global(.component-SortedList-section-title) {
        margin-bottom: 0;
      }

      .component-SortedList-section:not(:first-child) :global(.component-SortedList-section-title) {
        margin-top: ${theme.pxToEm(20, theme.typography.h3.fontSizeMobile)};
      }

      .component-SortedList-item :global(a):link,
      .component-SortedList-item :global(a):visited {
        color: ${theme.color.black};
      }

      .component-SortedList-item :global(a):active,
      .component-SortedList-item :global(a):focus,
      .component-SortedList-item :global(a):hover {
        color: ${theme.color.interactive};
      }

      @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        .component-SortedList-section:not(:first-child)
          :global(.component-SortedList-section-title) {
          margin-top: ${theme.pxToEm(20, theme.typography.h3.fontSizeDesktop)};
        }
      }
    `}</style>
  </ul>
);

SortedList.propTypes = {
  className: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

SortedList.defaultProps = {
  className: undefined,
};
