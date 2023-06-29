import moment from "moment";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import { JobInfo, Note } from "../components";
import { FaMapLocationDot, FaCalendarDays, FaDiceD6 } from "react-icons/fa6";

const Job = ({
  _id,
  position,
  company,
  note,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header className="info">
        <h5>{position}</h5>
        <p>{company}</p>
      </header>
      <div className="content">
        <JobInfo icon={<FaMapLocationDot />} text={jobLocation} />
        <JobInfo icon={<FaCalendarDays />} text={date} />
        <JobInfo icon={<FaDiceD6 />} text={jobType} />
        <div className={`status ${status}`}>{status}</div>
      </div>
      <Note note={note} />
      <footer className="btn-group">
        <button
          type="button"
          className="btn edit-btn"
          onClick={() => setEditJob(_id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => deleteJob(_id)}
        >
          Delete
        </button>
      </footer>
    </Wrapper>
  );
};
export default Job;
