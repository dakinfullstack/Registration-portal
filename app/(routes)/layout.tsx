import React from "react";
import Drawer from "../_component/layout/drawer";
import Navbar from "../_component/layout/navbar";
import Sidebar from "../_component/layout/sidebar";

type Props = { children: React.ReactNode };

export default function layout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <div>
          <Drawer />
        </div>
        <div className="p-4 w-screen">
          <Navbar></Navbar>
          {children}
        </div>
      </div>
    </div>
  );
}
