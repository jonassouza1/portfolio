import React from "react";
import { Form } from "./components/form";
import { Provider } from "./theme-context";
import "./styled.css";
const App = () => {
  return (
    <body>
      <Provider>
        <Form />
      </Provider>
    </body>
  );
};

export default App;
