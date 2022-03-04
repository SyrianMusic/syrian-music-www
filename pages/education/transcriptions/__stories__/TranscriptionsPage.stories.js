import environment from '../../../../utils/environment';
import {
  MusicalWork,
  musicalWorkDefault,
  musicalWorkEmpty,
  Paragraph,
  RichText,
  Text,
} from '../../../../__fixtures__';
import App from '../../../_app.page';
import TranscriptionPage from '../TranscriptionPage';

export default {
  title: 'Pages/Transcription',
  component: TranscriptionPage,
};

const Template = (args) => <App Component={TranscriptionPage} pageProps={args} />;

const arabicStanzas = [
  'مولاي أجفاني جفاهن الكرى\nوالشوق لاعجه بقلبي خیّما\nمولاي لي عمل ولكن موجب',
  'لعقوبتي فاحنن علي تكرما\nواجلو صدى قلبي بصفو محبة\nیا خیر من أعطى الجزاء وأنعما',
];

const arabicText = [
  new Paragraph({
    content: [
      new Text({
        value: arabicStanzas[0],
      }),
    ],
  }),
  new Paragraph({
    content: [
      new Text({
        value: arabicStanzas[1],
      }),
    ],
  }),
];

export const Default = Template.bind({});
Default.args = {
  adobeKey: environment.adobeKey,
  musicalWork: musicalWorkDefault,
  arabic: new MusicalWork({
    text: new RichText({
      content: arabicText,
    }),
  }),
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  musicalWork: musicalWorkEmpty,
  arabic: null,
};

export const OnlyEnglish = Template.bind({});
OnlyEnglish.args = {
  ...Empty.args,
  musicalWork: { ...musicalWorkEmpty, text: musicalWorkDefault.text },
  arabic: null,
};

export const OnlyArabic = Template.bind({});
OnlyArabic.args = {
  ...Empty.args,
  musicalWork: { ...musicalWorkEmpty, text: null },
  arabic: new MusicalWork({
    text: new RichText({
      content: arabicText,
    }),
  }),
};

export const LongerEnglish = Template.bind({});
LongerEnglish.args = {
  ...Empty.args,
  musicalWork: {
    ...musicalWorkEmpty,
    text: new RichText({
      content: [
        new Paragraph({
          content: [new Text({ value: 'Line1\nLine2\nLine3\nLine4' })],
        }),
      ],
    }),
  },
  arabic: new MusicalWork({
    text: new RichText({
      content: [arabicText[0]],
    }),
  }),
};

export const LongerArabic = Template.bind({});
LongerArabic.args = {
  ...Empty.args,
  musicalWork: {
    ...musicalWorkEmpty,
    text: new RichText({
      content: [
        new Paragraph({
          content: [new Text({ value: 'Line1\nLine2' })],
        }),
      ],
    }),
  },
  arabic: new MusicalWork({
    text: new RichText({
      content: [arabicText[0]],
    }),
  }),
};
