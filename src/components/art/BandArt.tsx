export function BandArt() {
  return (
    <svg
      viewBox="0 0 1440 960"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-labelledby="band-art-title"
    >
      <title id="band-art-title">
        Ilustração de uma sala de espera com três janelas em arco, luz de fim de tarde e uma sombra
        de planta na parede
      </title>
      <defs>
        <linearGradient id="band-wall" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#F4E7D5" />
          <stop offset="0.6" stopColor="#EBD9C1" />
          <stop offset="1" stopColor="#DCC7AB" />
        </linearGradient>
        <linearGradient id="band-light" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#FBF7F0" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FBF7F0" stopOpacity="0.25" />
        </linearGradient>
        <filter id="band-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <radialGradient id="band-vignette" cx="50%" cy="44%" r="78%">
          <stop offset="55%" stopColor="#7A5A38" stopOpacity="0" />
          <stop offset="100%" stopColor="#7A5A38" stopOpacity="0.16" />
        </radialGradient>
      </defs>

      <rect width="1440" height="960" fill="url(#band-wall)" />
      <rect y="640" width="1440" height="320" fill="#DFD0BA" />
      <rect y="638" width="1440" height="2" fill="#D3C2A8" />

      <g>
        <path
          d="M120 640V330a130 130 0 0 1 260 0v310Z"
          fill="url(#band-light)"
          stroke="#4F6B52"
          strokeWidth="5"
        />
        <path
          d="M430 640V330a130 130 0 0 1 260 0v310Z"
          fill="url(#band-light)"
          stroke="#4F6B52"
          strokeWidth="5"
        />
        <path
          d="M740 640V330a130 130 0 0 1 260 0v310Z"
          fill="url(#band-light)"
          stroke="#4F6B52"
          strokeWidth="5"
        />
        <g stroke="#4F6B52" strokeWidth="3" opacity="0.75">
          <path d="M250 208v432M560 208v432M870 208v432" />
          <path d="M120 440h260M430 440h260M740 440h260" />
        </g>
      </g>

      <g fill="#FBF7F0" opacity="0.28">
        <path d="M120 640h260l200 320H300Z" />
        <path d="M430 640h260l200 320H610Z" />
        <path d="M740 640h260l200 320H920Z" />
        <path d="M168 300l32 0 250 660h-40Z" opacity="0.5" />
      </g>

      <g fill="none" stroke="#4F6B52" strokeWidth="7" strokeLinecap="round" opacity="0.13">
        <path d="M1180 940c-10-190-40-320-96-430" />
        <path d="M1190 940c20-210 70-360 150-470" />
        <path d="M1170 940c-50-160-140-280-250-350" />
        <path d="M1210 940c60-150 170-250 280-300" />
      </g>
      <g fill="#4F6B52" opacity="0.12">
        <ellipse cx="1104" cy="560" rx="52" ry="21" transform="rotate(-54 1104 560)" />
        <ellipse cx="1080" cy="642" rx="48" ry="20" transform="rotate(-42 1080 642)" />
        <ellipse cx="1260" cy="530" rx="54" ry="22" transform="rotate(38 1260 530)" />
        <ellipse cx="1310" cy="610" rx="50" ry="20" transform="rotate(46 1310 610)" />
        <ellipse cx="1000" cy="640" rx="46" ry="19" transform="rotate(-28 1000 640)" />
        <ellipse cx="1350" cy="700" rx="52" ry="21" transform="rotate(34 1350 700)" />
      </g>

      <ellipse cx="560" cy="800" rx="540" ry="120" fill="#FBF7F0" opacity="0.16" />

      <g fill="#4F6B52" opacity="0.15">
        <rect x="196" y="700" width="472" height="13" rx="6" />
        <rect x="232" y="713" width="10" height="78" />
        <rect x="620" y="713" width="10" height="78" />
        <rect x="196" y="742" width="472" height="5" rx="2.5" opacity="0.65" />
        <rect x="300" y="800" width="264" height="8" rx="4" opacity="0.45" />
      </g>

      <rect width="1440" height="960" fill="url(#band-vignette)" />
      <rect
        width="1440"
        height="960"
        filter="url(#band-grain)"
        opacity="0.045"
        style={{ mixBlendMode: 'multiply' }}
      />
    </svg>
  );
}
