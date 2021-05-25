import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import Rule from '../Rule';
import PlusIcon from '../../icons/Plus';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';

export const Tabs = ({ label, tabs }) => {
  const { id: initialSelectedTab } = tabs[0];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);

  const handleSelectTab = (id) => () => {
    setSelectedTab(id);
    if (isMenuOpen) {
      closeMenu();
    }
  };

  const tabsById = tabs.reduce((acc, { id, ...curr } = {}) => {
    return { ...acc, [id]: curr };
  }, {});

  const { label: selectedTabLabel, panel } = tabsById[selectedTab];

  return (
    <div className={cx('tabs', { 'tabs--menu-expanded': isMenuOpen })}>
      <Button className="tabs__menu-toggle" onClick={toggleMenu}>
        {selectedTabLabel}
        <PlusIcon />
      </Button>

      <Rule />

      <div role="tablist" aria-label={label}>
        {tabs.map(({ id, label } = {}) => (
          <Button
            key={id}
            id={id}
            onClick={handleSelectTab(id)}
            role="tab"
            aria-selected={id === selectedTab}>
            {label}
          </Button>
        ))}
      </div>
      {panel}
      <style jsx>{`
        .tabs__menu-toggle {
          ${mixins.typography.h3.mobile}
          ${mixins.gutters.padding.mobile}
          display: flex;
          justify-content: space-between;
          text-decoration: none;
          width: 100%;
        }

        .tabs__menu-toggle svg line {
          transition: stroke 0.2s ease-in-out;
        }

        .tabs__menu-toggle:active svg line,
        .tabs__menu-toggle:focus svg line,
        .tabs__menu-toggle:hover svg line {
          stroke: ${theme.color.salmon};
        }

        [role='tablist'] {
          background-color: ${theme.color.white};
          box-shadow: 0 8px 6px -6px ${theme.color.withOpacity(theme.color.black, 0.5)};
          display: none;
          position: absolute;
          width: 100%;
          z-index: ${theme.zIndex.menuOverlay};
        }

        .tabs--menu-expanded [role='tablist'] {
          display: flex;
          flex-direction: column;
        }

        [role='tablist'] button {
          ${mixins.gutters.padding.mobile}
          margin-bottom: 1em;
          text-align: left;
        }

        [role='tablist'] button[aria-selected='true'] {
          color: ${theme.color.salmon};
          pointer-events: none;
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .tabs__menu-toggle,
          .tabs__menu-toggle ~ hr {
            display: none;
          }

          [role='tablist'] {
            box-shadow: none;
            display: flex;
          }

          [role='tablist'] button {
            ${mixins.typography.lg.desktop}
            border-bottom: ${theme.pxToRem(1)} solid ${theme.color.black};
            flex: 1;
            padding: ${theme.pxToEm(15, theme.typography.body.lg.fontSizeDesktop)} 0;
            margin-bottom: ${theme.pxToEm(32, theme.typography.body.lg.fontSizeDesktop)};
            text-align: left;
            text-decoration: none;
          }

          [role='tablist'] button:active,
          [role='tablist'] button:focus,
          [role='tablist'] button:hover,
          [role='tablist'] button[aria-selected='true'] {
            border-bottom-color: ${theme.color.salmon};
          }

          [role='tablist'] button:not(:last-child) {
            margin-right: 1em;
          }
        }
      `}</style>
    </div>
  );
};

Tabs.propTypes = {
  label: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      panel: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

Tabs.defaultProps = {};
