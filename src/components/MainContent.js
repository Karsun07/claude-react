import { Outlet } from "react-router";

export default function MainContent({ context }) {

  return (
    <Outlet context={context} />
  );
}