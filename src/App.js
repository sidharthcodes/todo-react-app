import React from "react";

import Form from "./components/Form";
import List from "./components/List";

const appTitle = "To Do App";

const App = () => {
  return(
    <div className="ui container center aligned">
      <h1>{appTitle}</h1>
      <Form />
      <List />
    </div>
  )
}

export default App;
