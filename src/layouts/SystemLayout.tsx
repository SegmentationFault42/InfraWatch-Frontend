import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export default function SystemLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
