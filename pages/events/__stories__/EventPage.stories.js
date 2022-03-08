import {
  emptyEvent,
  Event,
  mahmoudAjjan,
  MusicalWork,
  MusicalWorkCollection,
  PDF,
  RichText,
} from '../../../__fixtures__';
import App from '../../_app.page';
import EventPage from '../EventPage';

export default {
  title: 'Pages/Event',
  component: EventPage,
};

const Template = (args) => <App Component={EventPage} pageProps={args} />;

const defaultEvent = new Event();

export const Default = Template.bind({});
Default.args = {
  ...defaultEvent,
  program: {
    ...defaultEvent.program,
    items: defaultEvent.program.items.map(({ text, ...item }) => {
      if (item.__typename === 'ProgramHeader') {
        return {
          ...item,
          headerText: text,
        };
      }
      return item;
    }),
  },
};

export const Empty = Template.bind({});
Empty.args = emptyEvent;

export const TranscriptionAndTranslation = Template.bind({});
TranscriptionAndTranslation.args = {
  ...Default.args,
  program: new MusicalWorkCollection({
    musicalWorks: [
      new MusicalWork({
        transcription: new PDF(),
        text: new RichText(),
      }),
    ],
  }),
};

export const TranscriptionOnly = Template.bind({});
TranscriptionOnly.args = {
  ...Default.args,
  program: new MusicalWorkCollection({
    musicalWorks: [
      new MusicalWork({
        transcription: new PDF(),
        text: null,
      }),
    ],
  }),
};

export const TranslationOnly = Template.bind({});
TranslationOnly.args = {
  ...Default.args,
  program: new MusicalWorkCollection({
    musicalWorks: [
      new MusicalWork({
        transcription: null,
        text: new RichText(),
      }),
    ],
  }),
};

export const UnknownComposer = Template.bind({});
UnknownComposer.args = {
  ...Default.args,
  program: new MusicalWorkCollection({
    musicalWorks: [
      new MusicalWork({
        composer: null,
        performers: null,
      }),
    ],
  }),
};

export const DuplicateComposer = Template.bind({});
DuplicateComposer.args = {
  ...Default.args,
  program: new MusicalWorkCollection({
    musicalWorks: [
      new MusicalWork({
        composer: { ...mahmoudAjjan },
      }),
      new MusicalWork({
        composer: { ...mahmoudAjjan },
      }),
    ],
  }),
};
