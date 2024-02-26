import React from "react";
import { Form } from "./components/form";
import { Provider } from "./theme-context";

const App = () => {
  return (
    <>
      <Provider>
        <Form />
      </Provider>
    </>
  );
};

export default App;
