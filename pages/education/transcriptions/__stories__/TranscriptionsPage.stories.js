import environment from '../../../../utils/environment';
import { musicalWorkDefault, musicalWorkEmpty } from '../../../../__fixtures__';
import App from '../../../_app.page';
import TranscriptionPage from '../TranscriptionPage';

export default {
  title: 'Pages/Transcription',
  component: TranscriptionPage,
};

const Template = (args) => <App Component={TranscriptionPage} pageProps={args} />;

export const Default = Template.bind({});
Default.args = {
  adobeKey: environment.adobeKey,
  musicalWork: musicalWorkDefault,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  musicalWork: musicalWorkEmpty,
  arabic: null,
};

export const OnlyEnglish = Template.bind({});
