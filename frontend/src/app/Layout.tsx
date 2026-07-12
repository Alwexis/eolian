import { Outlet } from "react-router-dom";
import { Sidebar } from "../shared/components/Sidebar";

export function Layout() {
  return (
    <div className='antialiased font-sans bg-white min-h-dvh min-w-dvw grid grid-cols-[auto_1fr]'>
      <Sidebar />
      <div className='grid grid-rows-[auto_1fr]'>
        <header className='h-14 items-center gap-x-3 border-b border-b-neutral-200 px-4 backdrop-blur-sm'></header>
        <main className='p-4'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
