interface BrandProps {
  href?: string;
  label?: string;
  hidden?: boolean;
}

export function Brand({ href, label, hidden = false }: BrandProps) {
  const content = (
    <>
      <svg
        className="brand-mark"
        width="26"
        height="30"
        viewBox="0 0 26 30"
        aria-hidden={href ? true : undefined}
        focusable="false"
      >
        <path
          d="M2 28V13a11 11 0 0 1 22 0v15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="13" cy="19.5" r="3.2" fill="#A9512F" />
      </svg>
      <span>casulo</span>
    </>
  );

  if (href) {
    return (
      <a className="brand" href={href} aria-label={label}>
        {content}
      </a>
    );
  }

  return (
    <span className="brand" aria-hidden={hidden ? true : undefined}>
      {content}
    </span>
  );
}
