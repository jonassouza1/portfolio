//import App from "./app";
//import React from "react";
//import ReactDom from "react-dom";
//ReactDom.render(<App />, document.getElementById("root"));

import { createRoot } from "react-dom/client";
import App from "@/app";
import React from "react";

const rootElement: any = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
