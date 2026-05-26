export function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2L10.5 6.5H13.5L11 9.5L12 13.5L8 11.5L4 13.5L5 9.5L2.5 6.5H5.5L8 2Z"
        fill="#1A1714"
      />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.77h5.39a4.6 4.6 0 01-2 3.02v2.5h3.23c1.89-1.74 2.98-4.3 2.98-7.3z"
        fill="#4285F4"
      />
      <path
        d="M10 20c2.7 0 4.96-.9 6.62-2.44l-3.23-2.5c-.9.6-2.04.96-3.39.96-2.6 0-4.81-1.76-5.6-4.12H1.07v2.58A9.99 9.99 0 0010 20z"
        fill="#34A853"
      />
      <path
        d="M4.4 11.9a5.95 5.95 0 010-3.8V5.52H1.07a10 10 0 000 8.96l3.33-2.58z"
        fill="#FBBC05"
      />
      <path
        d="M10 3.98c1.47 0 2.79.5 3.83 1.5l2.86-2.86A9.97 9.97 0 0010 0a9.99 9.99 0 00-8.93 5.52L4.4 8.1C5.19 5.74 7.4 3.98 10 3.98z"
        fill="#EA4335"
      />
    </svg>
  );
}
