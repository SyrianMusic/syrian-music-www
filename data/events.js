import { MARKS } from '../utils/text';

export default [
  {
    id: 'event-1',
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
    date: new Date(Date.UTC(2021, 9, 31, 0)),
    description: [
      {
        _type: 'block',
        _key: 'event1-block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'event1-block1-child1',
            text: 'Syrian Ornaments',
            marks: [MARKS.ITALIC],
          },
          {
            _type: 'span',
            _key: 'event1-block1-child2',
            text:
              ', showcases instrumental and vocal compositions from composers across greater Syria. The works, written from the 1700s through today, range from traditional to innovative in both tonal and rhythmic center. Each piece illustrates the ornamental beauty of Syrian music.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'event1-block2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'event1-block2-child1',
            text:
              'This performance will feature acclaimed Syrian Oud virtuoso and musicologist Mohamed Qadri Dalal. Dalal visited Miami as a member of al-Kindi Ensemble with the landmark Whirling Dervishes of Damascus tours in 2001 and 2004, and now lives in Alexandria, Egypt.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'event1-block3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'event1-block3-child1',
            text:
              'This concert is presented free to the public as part of City Artist Corps Grants program, presented by The New York Foundation for the Arts (NYFA) and the New York City Department of Cultural Affairs (DCLA), with support from the Mayor’s Office of Media and Entertainment (MOME) as well as Queens Theatre.',
            marks: [],
          },
        ],
      },
    ],
    cta: {
      href: 'https://www.eventbrite.com/e/takht-al-nagham-syrian-ornaments-tickets-180399699357',
    },
  },
];
