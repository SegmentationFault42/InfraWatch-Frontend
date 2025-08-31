import { useState } from "react";
import type { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleBurgerClick = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header onBurgerClick={handleBurgerClick} />
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      <main
        className="
          flex-1 overflow-y-auto p-6
          mt-16          /* espaço do header */
          lg:ml-64       /* espaço da sidebar no desktop */
          transition-all
        "
      >
        {children}
      </main>
    </div>
  );
}
