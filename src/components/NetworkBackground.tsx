export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_30%,transparent_100%)] opacity-60 dark:opacity-40"></div>
      
      {/* Radial Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-brand-primary/10 blur-[180px] rounded-full opacity-60 dark:opacity-40"></div>
      
      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/20 dark:via-[#061121]/20 to-slate-50 dark:to-[#061121]"></div>
    </div>
  );
}
