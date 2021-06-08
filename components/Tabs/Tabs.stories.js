import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Tabs {...args} />;

// eslint-disable-next-line react/prop-types
const Panel = ({ children, opacity }) => (
  <div className="panel">
    {children}
    <style jsx>
      {`
        .panel {
          background-color: rgba(204, 204, 204, ${opacity});
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
      `}
    </style>
  </div>
);

const tabs = [
  {
    id: 'tab-1',
    label: 'Tab 1',
    panel: <Panel opacity="1">Tab 1</Panel>,
  },
  {
    id: 'tab-2',
    label: 'Tab 2',
    panel: <Panel opacity="0.66">Tab 2</Panel>,
  },
  {
    id: 'tab-3',
    label: 'Tab 3',
    panel: <Panel opacity="0.33">Tab 3</Panel>,
  },
];

export const Default = Template.bind({});
Default.args = {
  tabs,
};
