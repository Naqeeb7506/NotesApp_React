import React from "react";

function Note(props) {
  // let deleteNote = () => {
  //   props.deleteItem(props.id);
  // };

  return (
    <>
      <div className="note">
        <h3>{props.title}</h3>
        <p className="line-clamp">{props.content}</p>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </>
  );
}

export default Note;
