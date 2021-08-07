const composers = {
  ABU_AL_NASR_KHALED: {
    first: 'Khaled',
    last: 'Abu al-Nasr',
  },
  AJJAN_MAHMOUD: {
    first: 'Mahmoud',
    last: 'Ajjan',
  },
  AJJAN_ZIAD: {
    first: 'Ziad',
    last: 'Ajjan',
  },
  AL_SHAWWA_SAMI: {
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
  HAJ_HUSSEIN_KHALIL: {
    first: 'Khalil',
    last: 'Haj Hussein',
  },
  JABAQJI_ABDULRAHMAN: {
    first: 'Abdulrahman',
    last: 'Jabaqji',
  },
  KHASKIYYA_RAMEZ: {
    first: 'Ramez',
    last: 'Khaskiyya',
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
  LONGA: 'Longa',
  MUWASHAH: 'Muwashah',
  SAMAI: "Sama'i",
};

const maqams = {
  BAYATI: 'Bayati',
  BUSELIK: 'Buselik',
  HIJAZ: 'Hijaz',
  HIJAZ_KAR: 'Hijaz Kar',
  HUZAM: 'Huzam',
  NAHAWAND: 'Nahawand',
  NAWA_ATHAR: 'Nawa Athar',
  RAHAT_AL_ARWAH: 'Rahat al-Arwah',
  RAST: 'Rast',
  SABA_ZAMZAMA: 'Saba Zamzama',
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
    composer: composers.AL_SHAWWA_SAMI,
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
    composer: composers.ABU_AL_NASR_KHALED,
    form: forms.SAMAI,
    maqam: maqams.NAHAWAND,
    filename: 'AbuAl-NasrKhaled_SamaiNahawand.pdf',
  },
  {
    composer: composers.AJJAN_MAHMOUD,
    form: forms.SAMAI,
    maqam: maqams.SABA_ZAMZAMA,
    filename: 'AjjanMahmoud_SamaiSaba Zamzama.pdf',
  },
  {
    composer: composers.AJJAN_ZIAD,
    form: forms.LONGA,
    maqam: maqams.BUSELIK,
    filename: 'AjjanZiad_LongaBuselik.pdf',
  },
  {
    composer: composers.AJJAN_ZIAD,
    form: forms.LONGA,
    maqam: maqams.HUZAM,
    filename: 'AjjanZiad_LongaHuzam.pdf',
  },
  {
    composer: composers.AJJAN_MAHMOUD,
    form: forms.SAMAI,
    maqam: maqams.RAHAT_AL_ARWAH,
    filename: 'AjjanMahmoud_SamaiRahatal-Arwah.pdf',
  },
  {
    composer: composers.HAJ_HUSSEIN_KHALIL,
    form: forms.MUWASHAH,
    maqam: maqams.RAHAT_AL_ARWAH,
    filename: 'HajHusseinKhalil_MuwashahRahatal-Arwah.pdf',
  },
  {
    composer: composers.JABAQJI_ABDULRAHMAN,
    form: forms.SAMAI,
    maqam: maqams.RAST,
    filename: 'JabaqjiAbdulrahman_SamaiRast.pdf',
  },
  {
    composer: composers.KHASKIYYA_RAMEZ,
    form: forms.SAMAI,
    maqam: maqams.BAYATI,
    filename: 'KhaskiyyaRamez_SamaiBayati.pdf',
  },
];

const transcriptionsWithIds = transcriptions.reduce((acc, curr, index) => {
  return { ...acc, [`transcription-${index + 1}`]: curr };
}, {});

export default transcriptionsWithIds;
