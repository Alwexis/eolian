import { Outlet } from "react-router-dom";
import { Sidebar } from "../shared/components/Sidebar";
import { Header } from "@/shared/components/Header";

export function Layout() {
  return (
    <div className='antialiased font-sans bg-white min-h-dvh min-w-dvw grid grid-cols-[auto_1fr]'>
      <Sidebar />
      <div className='grid grid-rows-[auto_1fr]'>
        <Header />
        <main className='p-4'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
