import { Bell, Plus, Search, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Kbd } from "./ui/kbd";

export function Header() {
  const NOTIFICATIONS = 1; // hardcoded for now

  return (
    <header className='h-14 flex items-center gap-x-3 border-b border-b-neutral-200 px-4 backdrop-blur-sm'>
      <Button
        variant='outline'
        className='w-full max-w-md gap-2 bg-muted/50 px-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-muted-foreground'>
        <Search data-icon='inline-start' className='size-4' />
        <span className='flex-1 text-left'>Search anything...</span>
        <Kbd
          data-icon='inline-end'
          className='translate-x-0.5 bg-white font-medium border border-border px-1.5 py-0.5 text-[10px]'>
          ⌘ K
        </Kbd>
      </Button>
      <section className='ml-auto flex items-center gap-x-2.5'>
        <Button title='settings' variant='ghost' className='py-0.5 px-1.5'>
          <Settings className='size-4' />
        </Button>
        <Button
          className='relative py-0.5 px-1.5'
          title='notifications'
          variant='ghost'>
          {NOTIFICATIONS > 0 && (
            <span className='size-1.5 bg-blue-500 rounded-full absolute top-1 right-1 ' />
          )}
          <Bell className='size-4' />
        </Button>
        <Button className='gap-x-1'>
          <Plus data-icon='inline-start' className='size-3.5' />
          New
        </Button>
      </section>
    </header>
  );
}
