import { useState } from "react";

const Note = ({ note }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (note === null) {
    return <p className="note-detail">Note: waiting to be added...</p>;
  }

  if (note.length <= 60) {
    return <p className="note-detail">Note: {note}</p>;
  }

  return (
    <p className="note-detail">
      Note: {isReadMore ? note.slice(0, 60) : note}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
export default Note;
