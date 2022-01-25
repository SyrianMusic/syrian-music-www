export const RadioInput = ({ id, label, name, value }) => (
  <>
    <input id={id} type="radio" name={name} value={value} />
    <label htmlFor={id}>{label}</label>
  </>
);
