export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#39E19D] rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#64F2C6] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#39E19D] rounded-full opacity-5 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(57, 225, 157, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 225, 157, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}