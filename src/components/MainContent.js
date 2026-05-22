import { Outlet } from "react-router";

export default function MainContent({chatNames,setChatNames}) {

  return (
    <Outlet context={{chatNames,setChatNames}}/>
  );
}