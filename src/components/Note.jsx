import React from "react";
import ClearAllIcon from '@material-ui/icons/ClearAll';

function Note(props) {
  return (
    <div className="note transparent">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteItem(props.id)}><ClearAllIcon/></button>
    </div>
  );
}

export default Note;
