interface MicroIconProps {
  className?: string;
}

export function PauseIcon({ className = "" }: MicroIconProps) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <rect 
        x="6" 
        y="4" 
        width="4" 
        height="16" 
        stroke="#39E19D" 
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect 
        x="14" 
        y="4" 
        width="4" 
        height="16" 
        stroke="#39E19D" 
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "" }: MicroIconProps) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <path 
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
        stroke="#39E19D" 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="m9 12 2 2 4-4" 
        stroke="#39E19D" 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LockIcon({ className = "" }: MicroIconProps) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <rect 
        width="18" 
        height="11" 
        x="3" 
        y="11" 
        rx="2" 
        ry="2" 
        stroke="#39E19D" 
        strokeWidth="2"
      />
      <path 
        d="M7 11V7a5 5 0 0 1 10 0v4" 
        stroke="#39E19D" 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}