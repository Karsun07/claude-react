import { Outlet } from "react-router";

export default function MainContent() {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
}