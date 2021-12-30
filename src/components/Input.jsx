import React from "react";

function Input(props)
{
    return (
    <input
        name="title"
        placeholder="Title"
        onChange={(e) => props.updateTitle(e.target.value)}
        value={props.title}
      />
    );
}

export default Input;