import { Outlet } from "react-router";

export default function MainContent({chatNames,setChatNames,chatStarted,setChatStarted}) {

  return (
    <Outlet
      context={{
        chatNames,
        setChatNames,
        chatStarted,
        setChatStarted
      }}
    />
  );
}