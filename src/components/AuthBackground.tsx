import Image from "next/image";

export function AuthBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
      {/* === Ellipse 1 (smallest) === */}
      <svg
        width="739.68"
        height="727.94"
        viewBox="0 0 739.68 727.94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ellipse
          cx="369.84"
          cy="363.97"
          rx="368.84"
          ry="362.97"
          stroke="#E0E0E0"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      {/* === Ellipse 2 (medium) === */}
      <svg
        width="1109.52"
        height="1049.15"
        viewBox="0 0 1109.52 1049.15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ellipse
          cx="554.76"
          cy="524.57"
          rx="553.76"
          ry="523.57"
          stroke="#E0E0E0"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      {/* === Ellipse 3 (largest) === */}
      <svg
        width="1479.36"
        height="1411.3"
        viewBox="0 0 1479.36 1411.3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ellipse
          cx="739.68"
          cy="705.65"
          rx="738.68"
          ry="704.65"
          stroke="#E0E0E0"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      {/* === Curved Vector (insert here) === */}
      <svg
        width="58.23"
        height="113.74"
        viewBox="0 0 58.23 113.74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        style={{
          top: "550.03px",
          left: "192.59px",
        }}
      >
        <path
          d="M56.23 1C32 45 10 65 2 112.74"
          stroke="#E0E0E0"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
  width="66.1"
  height="94.65"
  viewBox="0 0 66.1 94.65"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute"
  style={{
    top: "600px",
    left: "97.97px",
    transform: "rotate(-180deg)",
  }}
>
  <path
    d="M2 1C20 50 40 70 64 93"
    stroke="#E0E0E0"
    strokeWidth="2"
    fill="none"
  />
</svg>

      
      {/* === Avatar Decorations === */}
      <div className="absolute top-10 left-10 flex flex-col items-center">
        <Image
          src="/avatar1.jpg"
          alt="Avatar 1"
          width={40}
          height={40}
          className="rounded-full shadow-md"
        />
        <span className="text-sm mt-1 bg-white px-2 py-1 rounded-full shadow">10</span>
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col items-center">
        <Image
          src="/avatar2.jpg"
          alt="Avatar 2"
          width={40}
          height={40}
          className="rounded-full shadow-md"
        />
        <span className="text-sm mt-1 bg-amber-300 px-2 py-1 rounded-full shadow">200</span>
      </div>

      <div className="absolute top-[25%] right-[15%] flex flex-col items-center">
        <Image
          src="/avatar3.jpg"
          alt="Avatar 3"
          width={40}
          height={40}
          className="rounded-full shadow-md"
        />
        <span className="text-sm mt-1 bg-white px-2 py-1 rounded-full shadow">31</span>
      </div>
    </div>
  );
}
