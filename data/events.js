import { MARKS } from '../utils/text';

export default [
  {
    id: 'event-1',
    image: {
      width: 432,
      height: 688,
      src: '/images/events/syrian-ornaments-takht-al-nagham-miami.png',
      srcSet: [
        {
          densityFactor: 2,
          src: '/images/events/syrian-ornaments-takht-al-nagham-miami@2x.png',
        },
        {
          densityFactor: 3,
          src: '/images/events/syrian-ornaments-takht-al-nagham-miami@3x.png',
        },
      ],
    },
    title: 'Syrian Ornaments',
    date: new Date(Date.UTC(2021, 8, 26, 0)),
    description: [
      {
        _type: 'block',
        _key: 'event-1-1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'event-1-1-1',
            text: 'Syrian Ornaments',
            marks: [MARKS.ITALIC],
          },
          {
            _type: 'span',
            _key: 'event-1-1-2',
            text:
              ', presented by the Rhythm Foundation, showcases instrumental compositions from composers across greater Syria. The works, written from the 1930s through today, range from traditional to innovative in both tonal and rhythmic center. Each piece illustrates the ornamental beauty of Syrian music.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'event-1-2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'event-1-2-1',
            text:
              'This performance will feature acclaimed Syrian Oud virtuoso and musicologist Muhammed Qadri Dalal. Dalal visited Miami as a member of al-Kindi Ensemble with the landmark Whirling Dervishes of Damascus tours in 2001 and 2004, and now lives in Alexandria, Egypt.',
            marks: [],
          },
        ],
      },
    ],
    cta: {
      href: 'https://www.rhythmfoundation.com/#/events?event_id=38395',
    },
  },
];
