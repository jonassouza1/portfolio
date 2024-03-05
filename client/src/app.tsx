import React from "react";
import { Form } from "./components/form";
import { Provider } from "./theme-context";
import "./styled.css";
const App = () => {
  return (
    <Provider>
      <Form />
    </Provider>
  );
};

export default App;
