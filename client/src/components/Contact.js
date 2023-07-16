import moment from "moment";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Contact";
import { Note, InfoCard } from "../components";
import { FaCalendarDays, FaPhone, FaEnvelope } from "react-icons/fa6";

const Contact = ({
  _id,
  name,
  lastName,
  company,
  email,
  phoneNumber,
  note,
  createdAt,
}) => {
  const { setEditContact, deleteContact } = useAppContext();
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header className="info">
        <div>
          <h5>
            {name} {lastName === null ? "" : lastName}
          </h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <InfoCard
          icon={<FaEnvelope />}
          text={email === null ? "Email" : email}
        />
        <InfoCard
          icon={<FaPhone />}
          text={phoneNumber === null ? "Phone Number" : phoneNumber}
        />
        <InfoCard icon={<FaCalendarDays />} text={date} />
      </div>
      <Note note={note === null ? "" : note} />
      <footer className="btn-group">
        <button
          type="button"
          className="btn edit-btn"
          onClick={() => setEditContact(_id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => deleteContact(_id)}
        >
          Delete
        </button>
      </footer>
    </Wrapper>
  );
};
export default Contact;
