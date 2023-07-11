import { useState } from "react";
import Wrapper from "../../assets/wrappers/GeneralForm";
import { useAppContext } from "../../context/appContext";
import { Alert, FormRow } from "../../components";

const Profile = () => {
  const { user, displayAlert, showAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, lastName, email, location });
  };

  return (
    <>
      <h3>profile</h3>

      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          {showAlert && <Alert />}

          <div className="form-center">
            <FormRow
              type="text"
              name="name"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
            <FormRow
              type="text"
              name="lastName"
              labelText="last name"
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
            />
            <FormRow
              type="email"
              name="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <FormRow
              type="location"
              name="location"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
            />
            <button
              className="btn btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "save changes"}
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};
export default Profile;
