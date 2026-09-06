interface SilverRingProps {
  className?: string;
  size?: number;
}

export function SilverRing({ className, size = 256 }: SilverRingProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="silverRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="50%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
      </defs>
      <circle
        cx="128"
        cy="128"
        r="120"
        stroke="url(#silverRingGradient)"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
