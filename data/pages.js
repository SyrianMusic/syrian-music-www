import { nonBreakingSpace } from '../utils/unicode';

export default {
  about: {
    mission: [
      {
        _type: 'block',
        _key: 'about-mission-1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'about-mission-1-1',
            text:
              'The Syrian Music Preservation Initiative promotes and celebrates the diverse ethnic and regional musical traditions of Syria through preservation, innovation, research, and education. Its activities include music and dance performances, classes, workshops, and seminars, as well as digital resources and' +
              nonBreakingSpace +
              'recordings.',
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    story: [
      {
        _type: 'block',
        _key: 'about-story-1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'about-story-1-1',
            text:
              'The Syrian Music Preservation Initiative is dedicated to preserving and invigorating the diverse ethnic and regional music traditions of Syria (including but not limited to Arabic, Kurdish, Armenian and Syriac).  Our performances promote the musical heritage of this region by presenting older works that are less known to the greater public as well as supporting contemporary exploration of the traditional forms by commissioning composers from Syria and the diaspora. In this way, we celebrate the past, present and future of Syrian music.' +
              nonBreakingSpace +
              'music.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'about-story-2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'about-story-2-1',
            text:
              'We strive to preserve the Syrian compositional practices by researching their history and context, translating lyrics, providing transcriptions, documenting our performances, and--most importantly  by making our digital resources accessible to artists, scholars, and communities' +
              nonBreakingSpace +
              'worldwide.',
            marks: [],
          },
        ],
      },
    ],
    people: ['samer-ali', 'marissa-arciola', 'fouad-salloum', 'hanna-madbak', 'homam-ibrahim'],
  },
};
