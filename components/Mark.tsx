export function Mark({ className = "mark" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 50c10-16 10-20 0-36"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M14 14h12l-4 5 4 5H14"
        fill="#F98B1C"
      />
      <path
        d="M22 32h30"
        stroke="#F98B1C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M48 27l8 5-8 5"
        stroke="#F98B1C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
