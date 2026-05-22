import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
