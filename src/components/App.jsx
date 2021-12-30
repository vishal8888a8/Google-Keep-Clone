import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [List, updateList] = React.useState([
    {
      title: "*%#@",
      content: ""
    }
  ]);

  function addItem(newTitle, newContent) {
    updateList((prev) => {
      return [...prev, { title: newTitle, content: newContent }];
    });
  }

  function deleteItem(idx) {
    updateList((prev) => {
      return prev.filter((item, index) => index !== idx);
    });
  }

  //components here
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {List.map((obj, index) =>
        obj.title === "*%#@" ? null : (
          <Note
            key={index}
            title={obj.title}
            content={obj.content}
            id={index}
            deleteItem={deleteItem}
          />
        )
      )}
      <Footer />
    </div>
  );
}

export default App;
