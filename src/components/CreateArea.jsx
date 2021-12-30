import React from "react";
import Input from "./Input";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  var [title, setTitle] = React.useState("");
  var [content, setContent] = React.useState("");
  var [focus,changeFocus] = React.useState(false);

  function updateTitle(newTitle)
  {
      setTitle(newTitle);
  }

  return (
    <div>
      <form className="create-note transparent">
        {focus?<Input title={title} updateTitle={updateTitle}/>:null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={focus?"3":"1"}
          onChange={(e) => setContent(e.target.value)}
          onFocus={(e) => changeFocus(!focus)}
          value={content}
        />
        <Zoom in={focus}> 
          <Fab
            onClick={(e) => {
              props.addItem(title, content);
              e.preventDefault();
              setTitle("");
              setContent("");
            }}>
            <PostAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
