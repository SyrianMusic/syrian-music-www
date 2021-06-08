const composers = {
  DARWISH_ALI: {
    first: 'Ali',
    last: 'Darwish',
  },
  FARRAN_ALI: {
    first: 'Ali',
    last: 'Farran',
  },
  OWEYSS_JAMIL: {
    first: 'Jamil',
    last: "'Oweyss",
  },
};

const forms = {
  SAMAI: "Sama'i",
};

const maqams = {
  BAYATI: 'Bayati',
  NAHAWANT: 'Nahawand',
  NAWA_ATHAR: 'Nawa Athar',
};

const transcriptions = [
  {
    composer: composers.DARWISH_ALI,
    form: forms.SAMAI,
    maqam: maqams.NAHAWANT,
    filename: 'DarwishAli_SamaiNahawand.pdf',
  },
  {
    composer: composers.FARRAN_ALI,
    form: forms.SAMAI,
    maqam: maqams.BAYATI,
    filename: 'FarranAli_SamaiBayati.pdf',
  },
  {
    composer: composers.OWEYSS_JAMIL,
    form: forms.SAMAI,
    maqam: maqams.NAWA_ATHAR,
    filename: 'OweyssJamil_SamaiNawaAthar.pdf',
  },
];

const transcriptionsWithIds = transcriptions.reduce((acc, curr, index) => {
  return { ...acc, [`transcription-${index + 1}`]: curr };
}, {});

export default transcriptionsWithIds;
