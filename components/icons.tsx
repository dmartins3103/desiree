export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7 10v7M7 7.2v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.6 1.4c0 .2 0 .3-.1.5l-.4.5c-.1.1-.2.3 0 .5.3.5.7.9 1.1 1.2.4.3.7.4.9.5.2 0 .3 0 .4-.1l.5-.6c.2-.2.3-.1.5-.1l1.4.7c.2.1.4.2.4.3.1.4 0 .9-.2 1.2-.3.4-.9.8-1.5.8-1.4.1-2.9-.6-4.1-1.6-.8-.7-1.5-1.6-1.9-2.6-.2-.6-.2-1.2.1-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowRight({
  color = "#1C140E",
  size = 16,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h9M8.5 4l4 4-4 4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ color = "#A8862E" }: { color?: string }) {
  return (
    <svg
      style={{ flex: "none", marginTop: 2 }}
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5l3 3 7-7.5"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircle() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="10" stroke="#A8862E" strokeWidth="1.2" />
      <path
        d="M6.5 11.2l3 3 6-6.5"
        stroke="#A8862E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
