import Link from 'next/link'

type NavItem = {
  name: string
  target?: string
}

const navItems: Record<string, NavItem> = {
  '/': {
    name: 'blog',
  },
  // 'https://github.com/geoochi/blog': {
  //   name: 'github',
  //   target: '_blink',
  // },
}

export function Navbar() {
  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative' id='nav'>
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems).map(([path, { name, target }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target={target}
                  className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
