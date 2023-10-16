import React, { useState } from "react";

function AddNote(props) {
  let [expand, setExpand] = useState(false);

  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  let inputEvent = (event) => {
    let { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    // console.log(note);
  };

  let addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  let expandIt = () => {
    setExpand(true);
  };

  let normal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="note_container">
        <div className="note_box" onDoubleClick={normal}>
          <form>
            {expand ? (
              <input
                type="text"
                name="title"
                id="title"
                required
                value={note.title}
                onChange={inputEvent}
                placeholder="Title"
                autoComplete="off"
              />
            ) : null}
            <textarea
              name="content"
              id="content"
              required
              value={note.content}
              onChange={inputEvent}
              //   cols="30"
              rows="5"
              placeholder="Write a note..."
              onClick={expandIt}
            ></textarea>
          </form>

          {expand ? (
            <button onClick={addEvent}>
              <i className="fa-solid fa-plus"></i>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default AddNote;
