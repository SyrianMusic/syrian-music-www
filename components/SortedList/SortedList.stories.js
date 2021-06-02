import { SortedList } from './SortedList';

export default {
  title: 'SortedList',
  component: SortedList,
  argTypes: {
    sections: {
      defaultValue: [
        {
          id: 'section1',
          title: 'Section 1',
          items: [
            {
              id: 'item1',
              text: 'Item 1',
              href: '#item1',
            },
            {
              id: 'item2',
              text: 'Item 2',
              href: '#item2',
            },
          ],
        },
        {
          id: 'section2',
          title: 'Section 2',
          items: [
            {
              id: 'item1',
              text: 'Item 1',
              href: '#item1',
            },
            {
              id: 'item2',
              text: 'Item 2',
              href: '#item2',
            },
          ],
        },
      ],
    },
  },
};

const Template = (args) => <SortedList {...args} />;

export const Default = Template.bind({});
Default.args = {};
