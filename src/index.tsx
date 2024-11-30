//import App from "./app";
//import React from "react";
//import ReactDom from "react-dom";
//ReactDom.render(<App />, document.getElementById("root"));
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { createRoot } from "react-dom/client";
import App from "@/app";
import React from "react";

const rootElement: any = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
