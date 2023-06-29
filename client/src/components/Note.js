import { useState } from "react";

const Note = ({ note }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (note.length === 0) {
    return <p className="job-note">Note: waiting to be added...</p>;
  }

  if (note.length <= 60) {
    return <p className="job-note">Note: {note}</p>;
  }

  return (
    <p className="job-note">
      Note: {isReadMore ? note.slice(0, 60) : note}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
export default Note;
