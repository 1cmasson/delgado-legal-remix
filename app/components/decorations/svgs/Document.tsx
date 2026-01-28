interface DocumentProps {
  className?: string;
  color?: string;
  size?: number;
}

export function Document({ className, color = "currentColor", size = 200 }: DocumentProps) {
  return (
    <svg
      width={size * 0.7}
      height={size}
      viewBox="0 0 140 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main document */}
      <path
        d="M20 10 L100 10 L120 30 L120 190 L20 190 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Folded corner */}
      <path
        d="M100 10 L100 30 L120 30"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Text lines */}
      <line x1="35" y1="50" x2="105" y2="50" stroke={color} strokeWidth="1" />
      <line x1="35" y1="65" x2="105" y2="65" stroke={color} strokeWidth="1" />
      <line x1="35" y1="80" x2="85" y2="80" stroke={color} strokeWidth="1" />
      
      <line x1="35" y1="100" x2="105" y2="100" stroke={color} strokeWidth="1" />
      <line x1="35" y1="115" x2="105" y2="115" stroke={color} strokeWidth="1" />
      <line x1="35" y1="130" x2="75" y2="130" stroke={color} strokeWidth="1" />
      
      {/* Seal/stamp circle */}
      <circle cx="90" cy="160" r="15" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="90" cy="160" r="10" stroke={color} strokeWidth="0.5" fill="none" />
      
      {/* Signature line */}
      <line x1="35" y1="165" x2="65" y2="165" stroke={color} strokeWidth="1" />
      <path
        d="M38 162 Q45 155 52 162 Q55 165 60 160"
        stroke={color}
        strokeWidth="0.75"
        fill="none"
      />
    </svg>
  );
}
