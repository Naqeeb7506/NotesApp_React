import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddNote from "./AddNote";
import Note from "./Note";

function App() {
  let [item, addItem] = useState([]);

  let addNote = (note) => {
    addItem((prevData) => {
      return [...prevData, note];
    });
  };

  let onDelete = (id) => {
    addItem((oldData) => {
      return oldData.filter((curdata, index) => {
        console.log(id, index);
        return id !== index;
      });
    });
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <AddNote passNote={addNote} />
        <div className="container">
          {item?.map((val, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                onSelect={onDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
