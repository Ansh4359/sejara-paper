export default function FloatingLeaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] right-[5%] opacity-[0.04] anim-float">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path
            d="M150 10C220 50 290 130 270 230C250 290 180 310 120 290C60 270 10 200 30 120C50 40 100 -30 150 10Z"
            fill="#1f5a1f"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[15%] left-[3%] opacity-[0.03] anim-float-slow"
        style={{ animationDelay: "2s" }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" fill="#3d8b3d" />
        </svg>
      </div>
      <div className="absolute top-[40%] left-[50%] opacity-[0.02] anim-spin-slow">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 10C140 30 180 70 170 130C160 170 130 190 90 180C50 170 20 130 30 80C40 30 60 -10 100 10Z"
            stroke="#3d8b3d"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
