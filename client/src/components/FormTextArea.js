const FormTextArea = ({ name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea
        value={value}
        name={name}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>
    </div>
  );
};
export default FormTextArea;
