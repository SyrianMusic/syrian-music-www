import { MARKS } from '../utils/text';

class Span {
  constructor(id, block) {
    this.id = id;
    this.block = block;
  }

  toString() {
    return `${this.block.toString()}-span${this.id}`;
  }
}

class Block {
  constructor(id, event) {
    this.id = id;
    this.event = event;
  }

  span(spanId) {
    return new Span(spanId, this);
  }

  toString() {
    return `${this.event.toString()}-block${this.id}`;
  }
}

class Event {
  constructor(id) {
    this.id = id;
  }

  block(blockId) {
    return new Block(blockId, this);
  }

  toString() {
    return `event${this.id}`;
  }
}

const event1 = new Event(1);
const event2 = new Event(2);

export default [
  {
    id: event1.toString(),
    image: {
      width: 432,
      height: 688,
      src: '/images/events/syrian-ornaments-takht-al-nagham-new-york.png',
      srcSet: [
        {
          densityFactor: 2,
          src: '/images/events/syrian-ornaments-takht-al-nagham-new-york@2x.png',
        },
        {
          densityFactor: 3,
          src: '/images/events/syrian-ornaments-takht-al-nagham-new-york@3x.png',
        },
      ],
    },
    title: 'Syrian Ornaments at City Lore',
    date: new Date(Date.UTC(2021, 10 - 1, 30 + 1, 0)),
    description: [
      {
        _type: 'block',
        _key: event1.block(1).toString(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: event1.block(1).span(1).toString(),
            text: 'Syrian Ornaments',
            marks: [MARKS.ITALIC],
          },
          {
            _type: 'span',
            _key: event1.block(1).span(2).toString(),
            text: ', showcases instrumental and vocal compositions from composers across greater Syria. The works, written from the 1700s through today, range from traditional to innovative in both tonal and rhythmic center. Each piece illustrates the ornamental beauty of Syrian music.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: event1.block(2).toString(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: event1.block(2).span(1).toString(),
            text: 'This performance will feature acclaimed Syrian Oud virtuoso and musicologist Mohamed Qadri Dalal. Mr. Dalal is originally from Aleppo and now lives in Alexandria, Egypt',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: event1.block(3).toString(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: event1.block(3).span(1).toString(),
            text: 'This concert is presented free to the public as part of City Artist Corps Grants program, presented by The New York Foundation for the Arts (NYFA) and the New York City Department of Cultural Affairs (DCLA), with support from the Mayor’s Office of Media and Entertainment (MOME) as well as Queens Theatre.',
            marks: [],
          },
        ],
      },
    ],
    cta: {
      href: 'https://www.eventbrite.com/e/takht-al-nagham-syrian-ornaments-tickets-180399699357',
    },
  },
  {
    id: event2.toString(),
    image: {
      width: 432,
      height: 688,
      src: '/images/events/syrian-ornaments-takht-al-nagham-new-york.png',
      srcSet: [
        {
          densityFactor: 2,
          src: '/images/events/syrian-ornaments-takht-al-nagham-new-york@2x.png',
        },
        {
          densityFactor: 3,
          src: '/images/events/syrian-ornaments-takht-al-nagham-new-york@3x.png',
        },
      ],
    },
    title: 'Quench the Thirsty',
    date: new Date(Date.UTC(2022, 3 - 1, 12 + 1, 1)),
    description: [
      {
        _type: 'block',
        _key: event2.block(1).toString(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: event2.block(1).span(1).toString(),
            text:
              'Takht al-Nagham presents an evening featuring two programs of music rarely heard in ' +
              "the US. The first half will feature Aleppo's oldest known composition, ",
            marks: [],
          },
          {
            _type: 'span',
            _key: event2.block(1).span(2).toString(),
            text: "Isqi Al-'Itash (Quench the Thirsty)",
            marks: [MARKS.ITALIC],
          },
          {
            _type: 'span',
            _key: event2.block(1).span(2).toString(),
            text:
              ', in its entirety. The work, originally composed in 1776, has only been ' +
              'performed once before in the US also by our ensemble and is a good representation of ' +
              'the microtonal maqam system set in the traditional form of the wasla, musical suite. ' +
              'We bring this work back to the stage with additional sections composed specifically ' +
              'for this performance. The second half will premier a wasla in maqam Huzam written ' +
              'by composers from the Syrian coastal city of Latakia.',
            marks: [],
          },
        ],
      },
    ],
    cta: {
      href: 'https://roulette.org/event/takht-al-nagham-classical-music-of-syria',
    },
  },
];
