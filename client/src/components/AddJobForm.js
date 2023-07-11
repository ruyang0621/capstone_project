import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/AddForm";
import { FormRow, Alert, FormRowSelect, FormTextArea } from "../components";
import { FaTimes } from "react-icons/fa";

const AddJobForm = () => {
  const {
    isEditing,
    isLoadingEdit,
    showAlert,
    displayAddJobForm,
    hideAddJobForm,
    displayAlert,
    position,
    company,
    note,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleJobChange,
    clearValues,
    createJob,
    editJob,
    resetEditJobValue,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (isEditing) {
      resetEditJobValue();
      return;
    }
    clearValues();
  };

  const handleJobInput = (e) => {
    handleJobChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <div
        className={
          displayAddJobForm
            ? "add-job-container show-add-job-form"
            : "add-job-container"
        }
      >
        <div className="form-container">
          <div className="header">
            <h3>{isEditing ? "edit job" : "add job"}</h3>
            <button
              className="close-btn"
              onClick={() => {
                hideAddJobForm();
                clearValues();
              }}
            >
              <FaTimes />
            </button>
          </div>
          {showAlert && <Alert />}
          <form className="form">
            <div className="form-center">
              <FormRow
                type="text"
                name="position"
                value={position}
                handleChange={handleJobInput}
              />
              <FormRow
                type="text"
                name="company"
                value={company}
                handleChange={handleJobInput}
              />
              <FormRow
                type="text"
                labelText="location"
                name="jobLocation"
                value={jobLocation}
                handleChange={handleJobInput}
              />
              <div className="row-select-container">
                <FormRowSelect
                  list={statusOptions}
                  name="status"
                  value={status}
                  handleChange={handleJobInput}
                />
                <FormRowSelect
                  list={jobTypeOptions}
                  name="jobType"
                  labelText="job type"
                  value={jobType}
                  handleChange={handleJobInput}
                />
              </div>
              <FormTextArea
                name="note"
                value={note}
                handleChange={handleJobInput}
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

export default AddJobForm;
