import PropTypes from 'prop-types';

const composerPropShape = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

const formPropShape = {
  name: PropTypes.string,
};

const maqamPropShape = {
  name: PropTypes.string,
};

export const musicalWorkPropShape = {
  composer: PropTypes.shape(composerPropShape),
  form: PropTypes.shape(formPropShape),
  maqam: PropTypes.shape(maqamPropShape),
  title: PropTypes.string,
  sys: PropTypes.shape({
    id: PropTypes.string,
  }),
};
