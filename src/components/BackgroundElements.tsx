export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Background Halo Motifs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 opacity-5">
        <div className="w-full h-full rounded-full border-8 border-[#39E19D] blur-sm"></div>
        <div className="absolute inset-4 rounded-full border-6 border-[#64F2C6] blur-sm"></div>
        <div className="absolute inset-8 rounded-full border-4 border-[#39E19D] blur-sm"></div>
      </div>
      
      <div className="absolute -bottom-32 -right-32 w-80 h-80 opacity-7">
        <div className="w-full h-full rounded-full border-6 border-[#64F2C6] blur-sm"></div>
        <div className="absolute inset-3 rounded-full border-4 border-[#39E19D] blur-sm"></div>
        <div className="absolute inset-6 rounded-full border-2 border-[#64F2C6] blur-sm"></div>
      </div>

      <div className="absolute top-1/3 -right-48 w-64 h-64 opacity-6">
        <div className="w-full h-full rounded-full border-4 border-[#39E19D] blur-md"></div>
        <div className="absolute inset-2 rounded-full border-2 border-[#64F2C6] blur-md"></div>
      </div>
    </div>
  );
}