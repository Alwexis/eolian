import EolianLogo from "@/shared/assets/eolian.png";
import {
  ChartColumn,
  GitBranch,
  Inbox,
  LayoutDashboard,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import { NavigationLink } from "./LinkWrapper";

export function Sidebar() {
  const flows = [];
  const USER = "Ariel Silva"; // hardcoded for now
  const USER_EMAIL = "asilva@eolian.cl";

  return (
    <aside className='w-60 bg-neutral-50 border-r border-r-neutral-200 flex flex-col'>
      <section className='flex items-center gap-x-1.5 p-3'>
        <img src={EolianLogo} alt='Eolian Logo' className='size-8' />
        <div className='leading-none'>
          <h2 className='text-sm font-medium'>Eolian</h2>
          <span className='text-xs text-neutral-700'>Moonie Studios</span>
        </div>
      </section>
      <nav className='flex flex-col gap-y-0.5 px-2'>
        <NavigationLink to='/'>
          <LayoutDashboard strokeWidth={1.5} className='size-4' />
          <span>Dashboard</span>
        </NavigationLink>
        <NavigationLink to='/inbox'>
          <Inbox strokeWidth={1.5} className='size-4' />
          <span>Inbox</span>
        </NavigationLink>
        <NavigationLink to='/flows'>
          <GitBranch strokeWidth={1.5} className='size-4' />
          <span>Flows</span>
        </NavigationLink>
        <NavigationLink to='/users'>
          <Users strokeWidth={1.5} className='size-4' />
          <span>Users</span>
        </NavigationLink>
        <NavigationLink to='/analytics'>
          <ChartColumn strokeWidth={1.5} className='size-4' />
          <span>Analytics</span>
        </NavigationLink>
        <NavigationLink to='/settings'>
          <Settings strokeWidth={1.5} className='size-4' />
          <span>Settings</span>
        </NavigationLink>
      </nav>

      <section className='mt-6 flex items-center justify-between px-4 pb-1'>
        <span className='text-[11px] font-semibold uppercase tracking-wide text-neutral-500'>
          Flows
        </span>
        <button
          type='button'
          className='text-neutral-500 transition-colors hover:text-neutral-800 cursor-pointer'>
          <Plus className='size-3.5' />
        </button>
      </section>
      <nav className='flex flex-col gap-y-0.5 px-2 overflow-y-auto'>
        {flows.length === 0 ? (
          <span className='text-neutral-500 text-xs text-center py-4'>
            No flows available
          </span>
        ) : (
          <></>
        )}
      </nav>
      <section className='border-t border-t-neutral-200 p-2.5 mt-auto'>
        <button
          type='button'
          className='flex w-full items-center gap-2.5 rounded-lg p-2 text-left transition-colors hover:bg-neutral-200/50 cursor-pointer'>
          <span className='inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white bg-indigo-500 ring-indigo-500 size-9 text-xs'>
            {USER.charAt(0).toUpperCase()}
            {USER.split(" ")[1].charAt(0).toUpperCase()}
          </span>
          <span className='flex-1 leading-tight'>
            <span className='block truncate text-sm font-medium text-neutral-800'>
              {USER}
            </span>
            <span className='block truncate text-xs text-neutral-400'>
              {USER_EMAIL}
            </span>
          </span>
        </button>
      </section>
    </aside>
  );
}
