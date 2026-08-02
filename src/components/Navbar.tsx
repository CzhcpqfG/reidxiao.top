const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'About', href: 'https://moat.best/about' },
  { label: 'Projects', href: 'https://moat.best/technology' },
  { label: 'Capabilities', href: 'https://moat.best/technology' },
  { label: 'Programs', href: 'https://moat.best/careers' },
  { label: 'Contact', href: 'https://moat.best/contact' },
]

export function Navbar() {
  return (
    <nav
      className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8"
    >
      <ul
        className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14"
        style={{ listStyle: 'none', margin: 0, padding: 0 }}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-xs md:text-sm"
              style={{ color: 'rgba(225, 224, 204, 0.8)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
