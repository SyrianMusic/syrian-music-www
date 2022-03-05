import { PDF } from './Asset';
import { Collection } from './Collection';
import { Composer } from './Composer';
import { Iqa } from './Iqa';
import { Maqam } from './Maqam';
import { Node } from './Node';

export class MusicalWork extends Node {
  constructor({
    title = 'Musical Work Title',
    composer = new Composer(),
    iqa = new Iqa(),
    maqam = new Maqam(),
    transcription = new PDF(),
    ...props
  } = {}) {
    super(props);
    this.title = title;
    this.composer = composer;
    this.iqa = iqa;
    this.maqam = maqam;
    this.transcription = transcription;
  }
}

export const musicalWorkDefault = new MusicalWork();

export const musicalWorkEmpty = new MusicalWork({
  composer: null,
  iqa: null,
  maqam: null,
  transcription: null,
});

export class MusicalWorkCollection extends Collection {
  constructor({ musicalWorks = [new MusicalWork()] } = {}) {
    super({ items: musicalWorks });
  }
}
