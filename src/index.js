import React from "react";
  import {createRoot} from "react-dom/client";
import GlobalStyle from "./globalStyle";
import Routes from "./routes";
import Users from "./conteiners/Users";
createRoot(document.getElementById("root")).render(
  <>
    
     
    <Routes />  
    <GlobalStyle />
  </>

);