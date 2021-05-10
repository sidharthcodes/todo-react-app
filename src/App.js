import React from "react";

import Form from "./components/Form";
import List from "./components/List";
import Section from "./components/Section";

const appTitle = "To Do App";

const App = () => {
  return(
    <div className="ui container center aligned">
      <Section>
        <h1>{appTitle}</h1>
      </Section>
      <Section>
        <Form />
      </Section>
      <Section>
        <List />
      </Section>
    </div>
  )
}

export default App;
