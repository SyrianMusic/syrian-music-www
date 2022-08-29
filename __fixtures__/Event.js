import faker from '../utils/faker';
import { Image } from './Asset';
import { Collection } from './Collection';
import { mahmoudAjjan, majdiAlAqili } from './Composer';
import { today } from './date';
import { MusicalWork } from './MusicalWork';
import { Node } from './Node';
import { Performer, PerformerCollection } from './Performer';
import { Paragraph, RichText, Text } from './RichText';

export class ProgramHeader extends Node {
  constructor({ text = 'Program Header', ...props } = {}) {
    super(props);
    this.__typename = 'ProgramHeader';
    this.text = text;
  }
}

export class Event extends Node {
  constructor({
    name = faker.music.songName(),
    startDate = today.toISOString(),
    location = 'Location',
    image = new Image({ width: 702, height: 257 }),
    summary = new RichText(),
    url = '#',
    urlText = 'Get tickets',
    program = new Collection({
      items: [
        new ProgramHeader({
          text: 'Section 1',
        }),
        new MusicalWork({
          id: '1',
          title: 'Sama’i Rahat al-Arwah',
          composer: mahmoudAjjan,
        }),
        new MusicalWork({
          id: '2',
          title: 'Muwashah Ayyuha al-Saqi',
          composer: majdiAlAqili,
        }),
        new ProgramHeader({
          text: 'Section 2',
        }),
        new MusicalWork({
          id: '3',
          title: 'Muwashah Jadaka al-Ghaithu',
          composer: majdiAlAqili,
        }),
        new MusicalWork({
          id: '4',
          title: 'Muwashah Ya Ghosna Naqa',
          composer: null,
        }),
      ],
    }),
    performers = new PerformerCollection({
      performers: [
        new Performer({
          id: 'takht-al-nagham',
          name: 'Takht al-Nagham',
          roles: [],
          biography: new RichText({
            content: [
              new Paragraph({
                content: [
                  new Text({
                    value:
                      "Takht al-Nagham is SMPI's performing ensemble. Based in New York City, the group features a traditional Takht (Arab chamber music group). “Nagham” is the Arabic word for melody; it is commonly used as a synonym for the Arab Maqam system. The Takht is committed to performing the classical and folk Syrian repertoire with traditional acoustic instruments. In order to familiarize audiences in the U.S. with the original structure of the musical traditions, the Takht presents its sets (called Waslah) in the manner that they were originally performed. The Takht includes skilled Syrian and non-Syrian musicians who perform without reading from sheet music, rely heavily on improvisations, and are deeply immersed in the Syrian musical tradition.",
                  }),
                ],
              }),
            ],
          }),
        }),
        new Performer({
          id: 'samer-ali',
          name: 'Samer Ali',
          roles: ['Violin', 'Founder and Artistic Director'],
          biography: new RichText({
            content: [
              new Paragraph({
                content: [
                  new Text({
                    value:
                      'A native of Syria, Samer Ali is a physician, violinist, composer, founder and artistic director of the Syrian Music Preservation Initiative. ',
                  }),
                ],
              }),
              new Paragraph({
                content: [
                  new Text({
                    value:
                      "Samer has led Takht al-Nagham, SMPI's ensemble, in New York at Alwan for the Arts, Scandinavia House, and Roulette Intermedium; as well as at the Kennedy center in Washington, DC with Syrian soprano Lubana al-Quntar. He began studying western classical violin at the age of eight with Fawaz al-Ali and Ali Farran, and later pursued intensive conservatory studies with Ali Mukhtar Babayev. He studied the Arab music traditions with Simon Shaheen, Anwar Hariri, and Muhammad Qadri Dalal. In Damascus, he co-founded Awj Ensemble, and has continued to perform in the US with groups like the Bronx Orchestra and the National Arab Orchestra. ",
                  }),
                ],
              }),
              new Paragraph({
                content: [
                  new Text({
                    value:
                      'In medicine, Samer received his M.D. from Syria and later graduated from medical residency in Anatomic and Clinical Pathology at Mount Sinai Hospital. He is currently a Hematopathology Fellow at Montefiore Hospital in New York. ',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
    acknowledgements = new RichText({
      content: [
        'Brooklyn Conservatory of Music for hosting the event.',
        'Erik Jönsson for making the website and our digital program possible.',
        'The SMPI Board of Directors:',
        'Hanna Madbak, Fouad Salloum, Dr. Homam Ibrahim, and Karin Nangreave.',
        'The SMPI volunteers for their great work and enthusiasm.',
      ].map((value) => {
        return new Paragraph({
          content: [new Text({ value })],
        });
      }),
    }),
    ...props
  } = {}) {
    super(props);
    this.name = name;
    this.startDate = startDate;
    this.location = location;
    this.image = image;
    this.summary = summary;
    this.url = url;
    this.urlText = urlText;
    this.program = program;
    this.performers = performers;
    this.acknowledgements = acknowledgements;
  }
}

export const emptyEvent = new Event({
  program: null,
  performers: {
    items: [],
  },
  acknowledgements: null,
});

export const syrianOrnaments = new Event({
  name: 'Syrian Ornaments',
  startDate: today.toISOString(),
  location: 'City Lore',
  image: new Image({
    height: 647,
    width: 1296,
    url: 'https://images.ctfassets.net/z5z5ow0csl1n/1NRarf7U3docdvkfqc5ykl/3a69260eba9860b9a69f582da7de26dd/syrian-ornaments-takht-al-nagham-new-york_3x.png',
  }),
  url: 'https://www.eventbrite.com/e/takht-al-nagham-syrian-ornaments-tickets-180399699357',
  urlText: 'Get tickets',
  summary: new RichText({
    content: [
      new Paragraph({
        content: [
          new Text({
            value: 'Syrian Ornaments',
            marks: [{ type: 'italic' }],
          }),
          new Text({
            value:
              ', showcases instrumental and vocal compositions from composers across greater Syria. The works, written from the 1700s through today, range from traditional to innovative in both tonal and rhythmic center. Each piece illustrates the ornamental beauty of Syrian music.',
          }),
        ],
      }),
      new Paragraph({
        content: [
          new Text({
            value:
              'This performance will feature acclaimed Syrian Oud virtuoso and musicologist Mohamed Qadri Dalal. Mr. Dalal is originally from Aleppo and now lives in Alexandria, Egypt',
          }),
        ],
      }),
      new Paragraph({
        content: [
          new Text({
            value:
              'This concert is presented free to the public as part of City Artist Corps Grants program, presented by The New York Foundation for the Arts (NYFA) and the New York City Department of Cultural Affairs (DCLA), with support from the Mayor’s Office of Media and Entertainment (MOME) as well as Queens Theatre.',
          }),
        ],
      }),
    ],
  }),
});

export const quenchTheThirsty = new Event({
  name: 'Quench the Thirsty',
});

export class EventCollection extends Collection {
  constructor({ events = [new Event()] } = {}) {
    super({ items: events });
  }
}
