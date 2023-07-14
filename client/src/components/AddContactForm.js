import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/AddForm";
import { FormRow, Alert, FormTextArea } from "../components";
import { FaTimes } from "react-icons/fa";
import validator from "validator";

const AddContactForm = () => {
  const {
    isEditing,
    isLoadingEdit,
    showAlert,
    contactName,
    contactLastName,
    contactNote,
    contactCompany,
    contactEmail,
    contactPhoneNum,
    displayAddContactForm,
    hideAddContactForm,
    clearContactValues,
    handleContactChange,
    displayAlert,
    createContact,
    resetEditContactValue,
    editContact,
  } = useAppContext();

  const handleContactInput = (e) => {
    handleContactChange({ name: e.target.name, value: e.target.value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (isEditing) {
      resetEditContactValue();
      return;
    }
    clearContactValues();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactCompany) {
      displayAlert();
      return;
    }
    if (contactEmail && !validator.isEmail(contactEmail)) {
      displayAlert("Please provide a valid email!");
      return;
    }
    if (contactPhoneNum && !validator.isMobilePhone(contactPhoneNum)) {
      displayAlert("Please provide a valid phone number!");
      return;
    }
    if (isEditing) {
      editContact();
      return;
    }
    createContact();
  };

  return (
    <Wrapper>
      <div
        className={
          displayAddContactForm
            ? "add-contact-container show-add-contact-form"
            : "add-contact-container"
        }
      >
        <div className="form-container">
          <div className="header">
            <h3>{isEditing ? "edit contact" : "add contact"}</h3>
            <button
              className="close-btn"
              onClick={() => {
                hideAddContactForm();
                clearContactValues();
              }}
            >
              <FaTimes />
            </button>
          </div>
          {showAlert && <Alert />}
          <form className="form">
            <div className="form-center">
              <div className="row-name-container">
                <FormRow
                  type="text"
                  labelText="name"
                  name="contactName"
                  value={contactName}
                  className="small-form-row"
                  handleChange={handleContactInput}
                />
                <FormRow
                  type="text"
                  labelText="last name"
                  name="contactLastName"
                  value={contactLastName}
                  className="small-form-row"
                  handleChange={handleContactInput}
                />
              </div>
              <FormRow
                type="text"
                labelText="company"
                name="contactCompany"
                value={contactCompany}
                handleChange={handleContactInput}
              />
              <FormRow
                type="email"
                labelText="email"
                name="contactEmail"
                value={contactEmail}
                handleChange={handleContactInput}
              />
              <FormRow
                type="text"
                labelText="phone number"
                name="contactPhoneNum"
                value={contactPhoneNum}
                handleChange={handleContactInput}
              />
              <FormTextArea
                labelText="note"
                name="contactNote"
                value={contactNote}
                handleChange={handleContactInput}
              />
              <div className="btn-container">
                <button
                  className="btn btn-block submit-btn"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoadingEdit}
                >
                  submit
                </button>
                <button
                  className="btn btn-block reset-btn"
                  onClick={handleReset}
                  disabled={isLoadingEdit}
                >
                  reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default AddContactForm;
