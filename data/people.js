import { apostrophe } from '../utils/unicode';

const KEYS = {
  fouadSalloum: 'fouad-salloum',
  hannaMadbak: 'hanna-madbak',
  homamIbrahim: 'homam-ibrahim',
  karinNangreave: 'karin-nangreave',
  marissaArciola: 'marissa-arciola',
  samerAli: 'samer-ali',
};

class Child {
  constructor({ key, text } = {}) {
    this.key = key;
    this.text = text;
  }

  format(index) {
    const key = `${this.key}-${index + 1}`;

    return {
      _type: 'span',
      _key: key,
      text: this.text,
      marks: [],
    };
  }
}

class Block {
  constructor({ children = [], key } = {}) {
    if (!Array.isArray(children)) {
      throw new Error('Block children are not an array.');
    }
    this.children = children.map((childConfig) => new Child({ ...childConfig, key: this.key }));
    this._key = key;
  }

  // TODO: Actually implement this
  format(index) {
    const key = `${this.key}-${index + 1}`;

    return {
      _type: 'block',
      _key: key,
      style: 'normal',
      children: this.children.map((child, childIndex) => child.format({ ...childIndex, key })),
      markDefs: [],
    };
  }
}

export default {
  [KEYS.samerAli]: {
    name: 'Samer Ali',
    title: 'Founder and Artistic Director',
    bio: [
      new Block({
        key: KEYS.samerAli,
        children: [
          {
            text: 'A native of Syria, Samer Ali is a physician, violinist, oudist, composer, and founder and artistic director of the Syrian Music Preservation Initiative.',
          },
        ],
      }),
      new Block({
        key: KEYS.samerAli,
        children: [
          {
            text: "He has led Takht al-Nagham, SMPI's Arab chamber music ensemble, in New York at Roulette Intermedium; Florida at Miami Beach Bandshell; and Washington, DC at Kennedy Center.",
          },
        ],
      }),
      new Block({
        key: KEYS.samerAli,
        children: [
          {
            text: 'Samer began studying western classical violin at the age of eight with Fawaz al-Ali and Ali Farran and later pursued intensive conservatory studies with Ali Mukhtar Babayev.',
          },
        ],
      }),
      new Block({
        key: KEYS.samerAli,
        children: [
          {
            text: 'An apprentice of Muhammad Qadri Dalal, the oud virtuoso, musicologist and prolific scholar of Arab maqam musical system and traditional music of Syria, Samer also studied the Arab classical violin with Simon Shaheen and Anwar Hariri.',
          },
        ],
      }),
      new Block({
        key: KEYS.samerAli,
        children: [
          {
            text: 'He co-founded Awj ensemble in Damascus, and has continued to perform in the US with groups like the Orchestra of the Bronx and the National Arab Orchestra.',
          },
        ],
      }),
      new Block({
        key: KEYS.samerAli,
        children: [
          {
            text: 'In medicine, Samer received his M.D. from Syria and is currently an Attending Pathologist and Assistant Professor at Lenox Hill Hospital in Manhattan, New York.',
          },
        ],
      }),
    ],
    image: {
      src: '/images/people/samer-ali.png',
      srcSet: [
        {
          densityFactor: 2,
          src: '/images/people/samer-ali@2x.png',
        },
        {
          densityFactor: 3,
          src: '/images/people/samer-ali@3x.png',
        },
      ],
      width: 370,
      height: 556,
    },
  },
  [KEYS.marissaArciola]: {
    name: 'Marissa Arciola',
    title: 'President',
    bio: [
      new Block({
        key: KEYS.marissaArciola,
        children: [
          {
            text: 'Marissa is a bassist, strategist and leader with a unique combination of artistic and business experience helping her build on founder Samer Ali’s vision of the SMPI.',
          },
        ],
      }),
      new Block({
        key: KEYS.marissaArciola,
        children: [
          {
            text: 'Marissa completed her undergraduate degree in double bass performance at the Eastman School of Music under the tutelage of renowned soloist, James VanDemark and Curtis Buris.  Marissa continued with music while completing her MBA and MA in Arts Administration at SMU.',
          },
        ],
      }),
      new Block({
        key: KEYS.marissaArciola,
        children: [
          {
            text: 'After her studies, Marissa has worked with a number of nonprofit organizations while playing with groups ranging from classical, rock, and Middle Eastern music.',
          },
        ],
      }),
      new Block({
        key: KEYS.marissaArciola,
        children: [
          {
            text: 'As President of the SMPI board, and member of Takht al-Nagham, Marissa helps to move the organization forward both programmatically and financially, by putting a focus on the digital initiatives, prioritizing projects and growing donation and fundraising prospects.',
          },
        ],
      }),
    ],
    image: {
      src: '/images/people/marissa-arciola.png',
      srcSet: [
        {
          densityFactor: 2,
          src: '/images/people/marissa-arciola@2x.png',
        },
        {
          densityFactor: 3,
          src: '/images/people/marissa-arciola@3x.png',
        },
      ],
      width: 370,
      height: 494,
    },
  },
  [KEYS.fouadSalloum]: {
    name: 'Fouad Salloum',
    title: 'Vice President of the Board',
    bio: [
      new Block({
        key: KEYS.fouadSalloum,
        children: [
          {
            text:
              'Fouad Salloum is a New York based business manager and amateur musician playing various instruments including oud, qanun, buzuq and ney. In addition to music, Fouad' +
              apostrophe +
              's passions include painting and photography and he has worked with many musical groups in various capacities and many locations.',
          },
        ],
      }),
      new Block({
        key: KEYS.fouadSalloum,
        children: [
          {
            text: 'Also an instrument collector, Fouad has amassed a collection of ouds (with a focus on the Syrian luthiers) which can only be described as breathtaking.',
          },
        ],
      }),
      new Block({
        key: KEYS.fouadSalloum,
        children: [
          {
            text: 'Fouad shares his collection, appreciation of art and his expertise with SMPI as the Vice President of the board.',
          },
        ],
      }),
    ],
  },
  [KEYS.hannaMadbak]: {
    name: 'Hanna Madbak',
    title: 'Legal Counsel',
    bio: [
      new Block({
        key: KEYS.hannaMadbak,
        children: [
          {
            text: "Hanna Madbak grew up in Beirut, Lebanon. From an early age, he was immersed in the music of the region and developed a deep appreciation of it. Hanna is an avid listener and student of Arabic music and studied oud with the late Director of the Lebanese Conservatory, Bassam Saba. Hanna is a practicing attorney in New York and serves as SMPI's legal advisor as well as being a member of the Board.",
          },
        ],
      }),
    ],
    image: {
      src: '/images/people/hanna-madbak.png',
      srcSet: [
        {
          densityFactor: 2,
          src: '/images/people/hanna-madbak@2x.png',
        },
        {
          densityFactor: 3,
          src: '/images/people/hanna-madbak@3x.png',
        },
      ],
      width: 370,
      height: 534,
    },
  },
  [KEYS.homamIbrahim]: {
    name: 'Homam Ibrahim',
    title: 'Board Member',
    bio: [
      new Block({
        key: KEYS.homamIbrahim,
        children: [
          {
            text: 'Homam Ibrahim was born in Latakia, Syria and began studying violin at the age of 10 with Bassam Yusuf. While playing with the Music Club of Latakia for many years, he developed a passion and an ear for music. In 2008, Homam came to the United States to pursue his medical training and he currently practices interventional cardiology at NYU. Homam feels strongly that preserving the history and tradition of Syrian music is important and sits on the board of SMPI to help move the many performance, research and education initiatives forward with planning and support.',
          },
        ],
      }),
    ],
    image: {
      src: '/images/people/homam-ibrahim.png',
      srcSet: [
        {
          densityFactor: 2,
          src: '/images/people/homam-ibrahim@2x.png',
        },
        {
          densityFactor: 3,
          src: '/images/people/homam-ibrahim@3x.png',
        },
      ],
      width: 370,
      height: 489,
    },
  },
  [KEYS.karinNangreave]: {
    name: 'Karin Nangreave',
    title: 'Treasurer',
    bio: [
      new Block({
        key: KEYS.karinNangreave,
        children: [
          {
            text: "Karin Nangreave is a double bassist turned financial director. After attending the Eastman School of Music, she transferred to Northwestern University to pursue a degree in Music Performance. After graduating, Karin then received a Master's of Science in Accounting and received her CPA designation. She became an auditor of nonprofit organizations where she helped advise them on their financial practices and how to properly set up their financial controls for success and compliance. Currently, she works as the Controller at a private school in Chicago for 2 years and has been on other arts nonprofit boards in the past.",
          },
        ],
      }),
    ],
  },
};
