import Link from 'next/link';

const sections = [
  {
    href: '/docs/1intro',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: 'Introduction',
    description: 'High-level concepts, header requirements, and authentication overview.',
  },
  {
    href: '/docs/2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: 'API Endpoints',
    description: 'Full VFMS Hotel endpoint reference with request and response schemas.',
  },
  {
    href: '/docs/3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    label: 'Reference',
    description: 'Response codes, error handling, and the raw PDF source document.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 px-6 py-20 max-w-2xl mx-auto w-full">
      

    

      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight text-fd-foreground mb-4 leading-tight">
        ZRA API Documentation
      </h1>

      {/* Subheading */}
      <p className="text-fd-muted-foreground text-lg leading-relaxed mb-4">
        Official developer reference for the Zanzibar Revenue Authority's
        Verified Fiscal Management System.
      </p>
      <p className="text-sm text-fd-muted-foreground leading-relaxed mb-12 rounded-xl border border-fd-border bg-fd-card p-4">
        Note: This site is not affiliated with ZRA or VFMS. It is an independent
        documentation example created to explain how the hotel integration works.
      </p>

      {/* Section cards */}
      <nav className="flex flex-col gap-3 mb-14" aria-label="Documentation sections">
        {sections.map(({ href, icon, label, description }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-start gap-4 p-4 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary hover:bg-fd-accent/30 transition-all duration-150"
          >
            <span className="mt-0.5 text-fd-muted-foreground group-hover:text-fd-primary transition-colors shrink-0">
              {icon}
            </span>
            <div>
              <p className="font-semibold text-fd-foreground mb-0.5">{label}</p>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">{description}</p>
            </div>
            <svg
              className="ml-auto mt-1 shrink-0 text-fd-muted-foreground group-hover:text-fd-primary group-hover:translate-x-0.5 transition-all duration-150"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Browse all docs
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-fd-muted-foreground text-sm">or jump straight into the reference.</span>
      </div>

    </main>
  );
}