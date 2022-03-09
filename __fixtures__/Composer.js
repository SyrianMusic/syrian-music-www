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

export const majdiAlAqili = new Composer({
  id: 'majdi-al-aqili',
  firstName: 'Majdi',
  lastName: "al-'Aqili",
  birthDate: '1917-01-01T00:00:00.000Z',
  birthPlace: 'Aleppo',
  biography: new RichText({
    content: [
      new Paragraph({
        content: [
          new Text({
            data: {},
            marks: [],
            value:
              'Majdi al-’Aqili started becoming interested in music in secondary school and despite his father’s objections, he studied oud with Bakri Kurdi and traditional music with Ali Darwish and Omar al-Batsh.  His musical life in the 1930s varied widely. In 1935, he created a seven-stringed instrument called ',
            nodeType: 'text',
          }),
          new Text({
            data: {},
            marks: [
              {
                type: 'italic',
              },
            ],
            value: 'gankaran',
            nodeType: 'text',
          }),
          new Text({
            data: {},
            marks: [],
            value:
              ' which was similar to the oud and could also be bowed. A year later, he traveled to Italy to study Western classical music theory and in 1939, he returned to Aleppo to start teaching music in schools.  ',
            nodeType: 'text',
          }),
        ],
      }),
      new Paragraph({
        content: [
          {
            data: {},
            marks: [],
            value:
              'In 1942, al-’Aqili was invited to Jordan to train the army band where he remained for two years after which he returned to his native Aleppo to resume teaching.  Always an educator, he was also the director of the Oriental Music Institute in Damascus from 1956 until they closed in 1959. ',
            nodeType: 'text',
          },
        ],
      }),
      new Paragraph({
        content: [
          {
            data: {},
            marks: [],
            value:
              '1947 heralded the start of his career in radio.  He moved to Damascus and was pivotal in the establishment of the Syrian Radio. He was also the director of Aleppo Radio in 1955 and was an advisory member for The General Organization of Radio and Television in 1962.  ',
            nodeType: 'text',
          },
        ],
      }),
      new Paragraph({
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'Also a prolific author and composer, he wrote many books on music, including: ',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'italic',
              },
            ],
            value: 'The Language of String ',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value: '(1940),',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'italic',
              },
            ],
            value: ' The Language of Music ',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value: '(1950),',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'italic',
              },
            ],
            value: ' Arab National Songs ',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value: '(1951),',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'italic',
              },
            ],
            value: ' Music and Songs of Childhood ',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value: '(1952),',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'italic',
              },
            ],
            value: ' Al-Kindi ',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value: '(1964),',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'italic',
              },
            ],
            value: ' Arab Listening ',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value: '(1969)',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'italic',
              },
            ],
            value: '. ',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value:
              'He composed 25 muwashahat, three of which are presented at today’s concert: “Ayyuha al-Saqi”, “Lao Kunta Tadri”, and “Jadaka al-Ghaithu”, all written in 1948.',
            nodeType: 'text',
          },
        ],
      }),
    ],
  }),
});
