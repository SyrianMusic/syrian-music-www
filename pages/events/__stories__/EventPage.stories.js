import {
  Composer,
  emptyEvent,
  Event,
  getDateRange,
  mahmoudAjjan,
  MusicalWork,
  MusicalWorkCollection,
  musicalWorkDefault,
  PDF,
  ProgramHeader,
  RichText,
} from '../../../__fixtures__';
import App from '../../_app.page';
import { pageParameters } from '../../__stories__/config';
import EventPage from '../EventPage';

export default {
  title: 'Pages/Event',
  component: EventPage,
  parameters: pageParameters,
};

const Template = (args) => <App Component={EventPage} pageProps={args} />;

const defaultEvent = new Event();

const transformItems = ({ text, ...item }) => {
  if (item.__typename === 'ProgramHeader') {
    return {
      ...item,
      headerText: text,
    };
  }
  return item;
};

const mahmoudAjjanArabic = new Composer({
  firstName: 'محمود',
  lastName: 'عجّان',
});

const majdiAlAqiliArabic = new Composer({
  firstName: 'مجدي',
  lastName: 'العقيلي',
});

export const Default = Template.bind({});
Default.args = {
  ...defaultEvent,
  programEnglish: {
    ...defaultEvent.program,
    items: defaultEvent.program.items.map(transformItems),
  },
  programArabic: {
    items: [
      new ProgramHeader({
        text: 'وصلة مقام راحة الأرواح',
      }),
      new MusicalWork({
        title: 'سماعي راحة الأرواح',
        composer: mahmoudAjjanArabic,
      }),
      new MusicalWork({
        title: 'شح أيّها السّاقي',
        composer: majdiAlAqiliArabic,
      }),
      new ProgramHeader({
        text: 'مقام نهوند',
      }),
      new MusicalWork({
        title: 'شح جَادكَ الغيثُ',
        composer: majdiAlAqiliArabic,
      }),
      new MusicalWork({
        title: 'موشح يا غُصنَ نقا',
        composer: null,
      }),
    ].map(transformItems),
  },
};

export const Empty = Template.bind({});
Empty.args = emptyEvent;

export const DateRange = Template.bind({});
DateRange.args = { ...Default.args, ...getDateRange() };

export const DateRangeSameYear = Template.bind({});
DateRangeSameYear.args = { ...Default.args, ...getDateRange({ same: 'year' }) };

export const DateRangeSameMonth = Template.bind({});
DateRangeSameMonth.args = { ...Default.args, ...getDateRange({ same: 'month' }) };

export const DateRangeSameDay = Template.bind({});
DateRangeSameDay.args = { ...Default.args, ...getDateRange({ same: 'day' }) };

export const DateRangeSameDayPeriod = Template.bind({});
DateRangeSameDayPeriod.storyName = 'Date Range Same AM/PM';
DateRangeSameDayPeriod.args = { ...Default.args, ...getDateRange({ same: 'dayPeriod' }) };

export const TranscriptionAndTranslation = Template.bind({});
TranscriptionAndTranslation.args = {
  ...Default.args,
  programEnglish: new MusicalWorkCollection({
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
  programEnglish: new MusicalWorkCollection({
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
  programEnglish: new MusicalWorkCollection({
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
  programEnglish: new MusicalWorkCollection({
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
  programEnglish: new MusicalWorkCollection({
    musicalWorks: [
      new MusicalWork({
        composer: { ...mahmoudAjjan },
      }),
      new MusicalWork({
        composer: { ...mahmoudAjjan },
      }),
    ].map(transformItems),
  }),
};

export const NoArabic = Template.bind({});
NoArabic.args = {
  ...Default.args,
  programEnglish: {
    items: [new ProgramHeader({ id: 1 }), { ...musicalWorkDefault, id: 2 }].map(transformItems),
  },
  programArabic: {
    items: [new ProgramHeader({ id: 1 }), { ...musicalWorkDefault, id: 2 }].map(transformItems),
  },
};

export const Intermission = Template.bind({});
Intermission.args = {
  ...Default.args,
  programEnglish: {
    items: [new ProgramHeader({ text: 'Intermission' })].map(transformItems),
  },
  programArabic: {
    items: [new ProgramHeader({ text: 'استراحة' })].map(transformItems),
  },
};

export const HasText = Template.bind({});
HasText.args = {
  ...Default.args,
  programEnglish: {
    items: [new MusicalWork()].map(transformItems),
  },
  programArabic: {
    items: [new MusicalWork()].map(transformItems),
  },
};
