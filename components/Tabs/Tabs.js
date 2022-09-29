import cx from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PlusIcon from '../../icons/Plus';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import Rule from '../Rule';
import { UnstyledButton } from '../Button';

export const Tabs = ({ renderLabel, tabs }) => {
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
      <UnstyledButton className="tabs__menu-toggle" onClick={toggleMenu}>
        {selectedTabLabel}
        <PlusIcon />
      </UnstyledButton>

      <Rule />

      <div role="tablist" aria-label={renderLabel({ selectedTab })}>
        {tabs.map(({ id, label } = {}) => (
          <UnstyledButton
            key={id}
            id={id}
            onClick={handleSelectTab(id)}
            role="tab"
            aria-selected={id === selectedTab}>
            {label}
          </UnstyledButton>
        ))}
      </div>
      {panel}
      <style jsx>{`
        .tabs :global(.tabs__menu-toggle) {
          ${mixins.typography.h3.mobile}
          ${mixins.gutters.padding.mobile}
          display: flex;
          justify-content: space-between;
          text-decoration: none;
          width: 100%;
        }

        .tabs :global(.tabs__menu-toggle) svg line {
          transition: stroke 0.2s ease-in-out;
        }

        .tabs :global(.tabs__menu-toggle):active svg line,
        .tabs :global(.tabs__menu-toggle):focus svg line,
        .tabs :global(.tabs__menu-toggle):hover svg line {
          stroke: ${theme.color.salmon};
        }

        .tabs :global([role='tablist']) {
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

        :global([role='tablist'] button) {
          ${mixins.gutters.padding.mobile}
          margin-bottom: 1em;
          text-align: left;
        }

        .tabs :global([role='tablist'] button[aria-selected='true']) {
          color: ${theme.color.salmon};
          pointer-events: none;
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .tabs :global(.tabs__menu-toggle),
          .tabs :global(.tabs__menu-toggle ~ hr) {
            display: none;
          }

          .tabs :global([role='tablist']) {
            box-shadow: none;
            display: flex;
            position: initial;
          }

          .tabs :global([role='tablist'] button) {
            ${mixins.typography.lg.desktop}
            border-bottom: ${theme.pxToRem(1)} solid ${theme.color.black};
            flex: 1;
            padding: ${theme.pxToEm(15, theme.typography.body.lg.fontSizeDesktop)} 0;
            margin-bottom: ${theme.pxToEm(32, theme.typography.body.lg.fontSizeDesktop)};
            text-align: left;
            text-decoration: none;
          }

          .tabs :global([role='tablist'] button:active),
          .tabs :global([role='tablist'] button:focus),
          .tabs :global([role='tablist'] button:hover),
          .tabs :global([role='tablist'] button[aria-selected='true']) {
            border-bottom-color: ${theme.color.salmon};
          }

          .tabs :global([role='tablist'] button:not(:last-child)) {
            margin-right: 1em;
          }
        }
      `}</style>
    </div>
  );
};

Tabs.propTypes = {
  renderLabel: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      panel: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

Tabs.defaultProps = {
  renderLabel: ({ selectedTab }) => selectedTab,
};
