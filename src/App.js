import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Search from "./components/Search";
import Chats from "./components/Chats";
import Projects from "./components/Projects";
import NewChat from "./components/NewChat";
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />}>

            <Route index element={<NewChat />} />
            <Route path="search" element={<Search />} />
            <Route path="recents" element={<Chats />} />
            <Route path="projects" element={<Projects />} />
            <Route path="new-chat" element={<NewChat />} />
            <Route path="chat/:id" element={<Chats />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
