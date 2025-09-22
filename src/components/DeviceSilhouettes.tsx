export function DeviceSilhouettes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Phone Silhouette */}
      <div className="absolute top-1/4 right-1/4 transform rotate-12 opacity-12">
        <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
          <rect 
            x="1" 
            y="1" 
            width="118" 
            height="238" 
            rx="20" 
            stroke="#64F2C6" 
            strokeWidth="1"
            fill="none"
          />
          <rect 
            x="15" 
            y="25" 
            width="90" 
            height="160" 
            rx="4" 
            stroke="#64F2C6" 
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <circle 
            cx="60" 
            cy="210" 
            r="12" 
            stroke="#64F2C6" 
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Laptop Silhouette */}
      <div className="absolute top-1/2 left-1/4 transform -rotate-6 opacity-15">
        <svg width="320" height="200" viewBox="0 0 320 200" fill="none">
          <rect 
            x="20" 
            y="1" 
            width="280" 
            height="160" 
            rx="8" 
            stroke="#64F2C6" 
            strokeWidth="1"
            fill="none"
          />
          <rect 
            x="35" 
            y="15" 
            width="250" 
            height="135" 
            rx="4" 
            stroke="#64F2C6" 
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <ellipse 
            cx="160" 
            cy="175" 
            rx="150" 
            ry="15" 
            stroke="#64F2C6" 
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}