import { Image } from './Asset';
import { Collection } from './Collection';
import { mahmoudAjjan, ComposerCollection, Composer } from './Composer';
import { today } from './date';
import { Node } from './Node';
import { Performer, PerformerCollection } from './Performer';
import { Paragraph, RichText, Text } from './RichText';

export class Event extends Node {
  constructor({
    name = 'Syrian Ornaments',
    startDate = today.toISOString(),
    location = 'Location',
    image = new Image({ width: 702, height: 257 }),
    summary = new RichText(),
    url = '#',
    composers = new ComposerCollection({
      composers: [
        mahmoudAjjan,
        new Composer({
          birthPlace: null,
          image: null,
          biography: new RichText({
            content: [
              new Paragraph({
                content: [
                  new Text({
                    value:
                      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.',
                  }),
                ],
              }),
              new Paragraph({
                content: [
                  new Text({
                    value:
                      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
                  }),
                ],
              }),
            ],
          }),
        }),
        mahmoudAjjan,
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
    this.composers = composers;
    this.performers = performers;
    this.acknowledgements = acknowledgements;
  }
}

export class EventCollection extends Collection {
  constructor({ events = [new Event()] } = {}) {
    super({ items: events });
  }
}
