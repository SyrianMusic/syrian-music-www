const composers = {
  ABUALNASR_KHALED: {
    first: 'Khaled',
    last: 'Abu al-Nasr',
  },
  AJJAN_MAHMOUD: {
    first: 'Mahmoud',
    last: 'Ajjan',
  },
  ALSHAWWA_SAMI: {
    first: 'Sami',
    last: 'al-Shawwa',
  },
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
  SHALFOUN_ISKANDER: {
    first: 'Iskander',
    last: 'Shalfoun',
  },
};

const forms = {
  BASHRAF: 'Bashraf',
  SAMAI: "Sama'i",
};

const maqams = {
  BAYATI: 'Bayati',
  HIJAZ: 'Hijaz',
  HIJAZ_KAR: 'Hijaz Kar',
  NAHAWAND: 'Nahawand',
  NAWA_ATHAR: 'Nawa Athar',
  RAST: 'Rast',
};

const transcriptions = [
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
  {
    composer: composers.DARWISH_ALI,
    form: forms.SAMAI,
    maqam: maqams.NAHAWAND,
    filename: 'DarwishAli_SamaiNahawand.pdf',
  },
  {
    composer: composers.AJJAN_MAHMOUD,
    form: forms.SAMAI,
    maqam: maqams.HIJAZ,
    filename: 'AjjanMahmoud_SamaiHijaz.pdf',
  },
  {
    composer: composers.ALSHAWWA_SAMI,
    form: forms.BASHRAF,
    maqam: maqams.RAST,
    filename: 'al-ShawwaSami_BashrafRast.pdf',
  },
  {
    composer: composers.SHALFOUN_ISKANDER,
    form: forms.SAMAI,
    maqam: maqams.HIJAZ_KAR,
    filename: 'ShalfounIskander_SamaiHijazKar.pdf',
  },
  {
    composer: composers.ABUALNASR_KHALED,
    form: forms.SAMAI,
    maqam: maqams.NAHAWAND,
    filename: 'AbuAl-NasrKhaled_SamaiNahawand.pdf',
  },
];

const transcriptionsWithIds = transcriptions.reduce((acc, curr, index) => {
  return { ...acc, [`transcription-${index + 1}`]: curr };
}, {});

export default transcriptionsWithIds;
