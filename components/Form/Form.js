import PropTypes from 'prop-types';

export const Form = ({ children, onSubmit }) => {
  let handleSubmit;

  if (typeof onSubmit === 'function') {
    handleSubmit = (e) => {
      e.preventDefault();
      const isValid = e.target.checkValidity();

      if (isValid) {
        onSubmit(e);
      }
      // TODO: handle validation errors
    };
  }

  return <form onSubmit={handleSubmit}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  children: undefined,
};
