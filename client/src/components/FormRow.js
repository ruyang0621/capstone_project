const FormRow = ({ type, name, value, handleChange, labelText, className }) => {
  return (
    <div className={className ? "form-row " + className : "form-row"}>
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;
