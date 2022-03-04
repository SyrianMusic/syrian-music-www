import { PDF } from './Asset';
import { Collection } from './Collection';
import { Composer } from './Composer';
import { Iqa } from './Iqa';
import { Maqam } from './Maqam';
import { Node } from './Node';
import { Paragraph, RichText, Text } from './RichText';

export class MusicalWork extends Node {
  constructor({
    title = 'Musical Work Title',
    composer = new Composer(),
    iqa = new Iqa(),
    maqam = new Maqam(),
    transcription = new PDF(),
    text = new RichText({
      content: [
        new Paragraph({
          content: [
            new Text({
              value:
                'My Lord, sleep has forgotten my tired lids\nAnd this burning thirst in my heart abounds\nMy lord, of my sins I confess and profess',
            }),
          ],
        }),
        new Paragraph({
          content: [
            new Text({
              value:
                'To my punishment I acquiesce, Thy mercy I beseech\nAbsolve my corroded heart with thy benevolent love\nMost beneficent, Thou bestows in abundance\n',
            }),
          ],
        }),
      ],
    }),
    ...props
  } = {}) {
    super(props);
    this.title = title;
    this.composer = composer;
    this.iqa = iqa;
    this.maqam = maqam;
    this.transcription = transcription;
    this.text = text;
  }
}

export const musicalWorkDefault = new MusicalWork();

export const musicalWorkEmpty = new MusicalWork({
  composer: null,
  iqa: null,
  maqam: null,
  transcription: null,
  text: null,
});

export class MusicalWorkCollection extends Collection {
  constructor({ musicalWorks = [new MusicalWork()] } = {}) {
    super({ items: musicalWorks });
  }
}
