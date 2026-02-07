export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Decorative shapes */}
      <div className="absolute top-20 -right-20 w-[600px] h-[600px] opacity-20">
        <img
          src="/assets/generated/decor-shapes-light.dim_1400x900.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Accent orb - bottom left */}
      <div className="absolute bottom-40 -left-40 w-[500px] h-[500px] opacity-15">
        <img
          src="/assets/generated/accent-orb-light.dim_800x800.png"
          alt=""
          className="w-full h-full object-contain blur-2xl"
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 to-transparent blur-3xl" />
    </div>
  );
}
