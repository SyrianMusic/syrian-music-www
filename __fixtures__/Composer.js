import { Image } from './Asset';
import { Collection } from './Collection';
import { Node } from './Node';
import { Paragraph, RichText, Text } from './RichText';

export class Composer extends Node {
  constructor({
    firstName = 'First',
    lastName = 'Last',
    birthDate = new Date(1900, 1, 1).toISOString(),
    birthPlace = 'New York',
    deathDate = new Date(2000, 12, 31).toISOString(),
    image = new Image({ width: 346, height: 326 }),
    biography = new RichText(),
    ...props
  } = {}) {
    super(props);
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.birthPlace = birthPlace;
    this.deathDate = deathDate;
    this.image = image;
    this.biography = biography;
  }
}

export class ComposerCollection extends Collection {
  constructor({ composers = [new Composer()] } = {}) {
    super({ items: composers });
  }
}

export const mahmoudAjjan = new Composer({
  id: 'mahmoud-ajjan',
  firstName: 'Mahmoud',
  lastName: 'Ajjan',
  birthDate: '1915-01-01',
  deathDate: '2006-01-01',
  birthPlace: 'Latakia',
  biography: new RichText({
    content: [
      new Paragraph({
        content: [
          new Text({
            value:
              'Mahmoud Ajjan was a scholar, oudist, violinist and composer who was primarily self-taught through extensive study and practice. He began composing at the age of 15 and continued throughout his lifetime, becoming one of Syria’s hidden gems.',
          }),
        ],
      }),
      new Paragraph({
        content: [
          new Text({
            value:
              'In 1945, he established the Musical Club of Latakia which became the institution responsible for the musical education of the youth in the region. This aided many to pursue music professionally as adults.  In 1957, he was one of the Syrian delegates to the 6th World Festival of Youth and Students in Moscow.  Here he performed one of his compositions for violin at a celebration of the prominent Arab poet and philosopher Abu al-’Alaa al-Ma’arri (973-1057). His performance was so well received that he was later honored at the Moscow Institute of Oriental Studies. After his subsequent return, Ajjan received two awards from the Syrian Ministry of Culture, in 1959 and then again in 1969. ',
          }),
        ],
      }),
      new Paragraph({
        content: [
          new Text({
            value:
              'In addition to performing, composing and teaching, he was dedicated to research, archiving and transcribing numerous Adwar (pleural of Dawr) and Muwashahat and published two books, ',
          }),
        ],
      }),
      new Paragraph({
        content: [
          new Text({
            value: 'Study of the Dawr',
            marks: [{ type: 'italic' }],
          }),
          new Text({
            value: ' (1990) and ',
          }),
          new Text({
            value: 'Leil & ‘Ayn in music and poetry traditions',
            marks: [{ type: 'italic' }],
          }),
          new Text({
            value:
              ' (2001).  While not widely known outside of his region, his impact on composition, musicology and his students was immense.  ',
          }),
        ],
      }),
      new Paragraph({
        content: [
          new Text({
            value:
              "We start today's concert with Ajjan's \"Sama'i Rahat al-Arwah\" which was written in 1936.",
          }),
        ],
      }),
    ],
  }),
});
