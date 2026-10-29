export function HeroArt() {
  return (
    <svg
      viewBox="0 0 560 700"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-labelledby="hero-art-title hero-art-desc"
    >
      <title id="hero-art-title">
        Ilustração de um vaso terracota com galhos sobre uma mesa, diante de um arco e de um sol
      </title>
      <desc id="hero-art-desc">
        Composição em tons de creme, areia e sálvia: um arco pintado na parede, um sol terracota, um
        vaso com folhagens e dois livros sobre a mesa.
      </desc>
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0" stopColor="#F8F0E4" />
          <stop offset="0.55" stopColor="#F0E1CC" />
          <stop offset="1" stopColor="#E5D1B6" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D69E70" />
          <stop offset="1" stopColor="#BC6C43" />
        </linearGradient>
        <linearGradient id="vase" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#B45C39" />
          <stop offset="1" stopColor="#8C3E23" />
        </linearGradient>
        <filter id="blur-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="560" height="700" fill="url(#wall)" />
      <path d="M84 700V318a196 196 0 0 1 392 0v382Z" fill="#F4E8D6" opacity="0.72" />
      <circle cx="392" cy="232" r="96" fill="url(#sun)" />
      <circle cx="392" cy="232" r="96" fill="none" stroke="#FBF7F0" strokeOpacity="0.4" />

      <rect y="520" width="560" height="180" fill="#E8DAC6" />
      <rect y="520" width="560" height="1.5" fill="#D8CDBC" />

      <ellipse cx="230" cy="578" rx="100" ry="15" fill="#2C2A24" opacity="0.1" filter="url(#blur-soft)" />

      <g fill="none" stroke="#4F6B52" strokeWidth="3" strokeLinecap="round">
        <path d="M214 460C204 392 176 344 138 306" />
        <path d="M216 462C222 386 248 336 288 292" />
        <path d="M214 460C212 386 214 330 208 268" />
        <path d="M215 462C232 404 274 380 316 368" />
      </g>

      <g fill="#7C9979">
        <ellipse cx="192" cy="410" rx="16" ry="7" transform="rotate(-58 192 410)" />
        <ellipse cx="176" cy="376" rx="15" ry="6.5" transform="rotate(-42 176 376)" />
        <ellipse cx="159" cy="344" rx="14" ry="6" transform="rotate(-34 159 344)" />
        <ellipse cx="146" cy="318" rx="12" ry="5.5" transform="rotate(-20 146 318)" />
        <ellipse cx="236" cy="404" rx="16" ry="7" transform="rotate(44 236 404)" />
        <ellipse cx="252" cy="368" rx="15" ry="6.5" transform="rotate(50 252 368)" />
        <ellipse cx="270" cy="330" rx="14" ry="6" transform="rotate(56 270 330)" />
        <ellipse cx="286" cy="300" rx="12" ry="5.5" transform="rotate(62 286 300)" />
        <ellipse cx="199" cy="374" rx="14" ry="6" transform="rotate(-74 199 374)" />
        <ellipse cx="219" cy="336" rx="14" ry="6" transform="rotate(72 219 336)" />
        <ellipse cx="206" cy="296" rx="12" ry="5.5" transform="rotate(-64 206 296)" />
        <ellipse cx="252" cy="430" rx="15" ry="6.5" transform="rotate(26 252 430)" />
        <ellipse cx="284" cy="400" rx="15" ry="6.5" transform="rotate(36 284 400)" />
        <ellipse cx="308" cy="380" rx="13" ry="6" transform="rotate(44 308 380)" />
      </g>
      <g fill="#8FA98C">
        <ellipse cx="204" cy="392" rx="12" ry="5" transform="rotate(-30 204 392)" />
        <ellipse cx="260" cy="386" rx="12" ry="5" transform="rotate(30 260 386)" />
        <ellipse cx="212" cy="316" rx="11" ry="5" transform="rotate(-80 212 316)" />
      </g>

      <path
        d="M186 452h58v20c32 14 42 56 24 84-12 19-30 27-53 27s-41-8-53-27c-18-28-8-70 24-84z"
        fill="url(#vase)"
      />
      <ellipse cx="215" cy="452" rx="29" ry="5.5" fill="#7C3520" />
      <path
        d="M192 478c-14 20-12 44 2 60"
        fill="none"
        stroke="#FBF7F0"
        strokeOpacity="0.18"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <g>
        <rect x="356" y="557" width="94" height="9" rx="2" fill="#4F6B52" opacity="0.85" />
        <rect x="368" y="548" width="70" height="9" rx="2" fill="#C98A5E" />
      </g>

      <g>
        <path d="M466 548h34v22a10 10 0 0 1-10 10h-14a10 10 0 0 1-10-10z" fill="#FBF7F0" />
        <path d="M500 554h8a8 8 0 0 1 0 16h-8" fill="none" stroke="#FBF7F0" strokeWidth="3" />
      </g>

      <rect
        width="560"
        height="700"
        filter="url(#grain)"
        opacity="0.05"
        style={{ mixBlendMode: 'multiply' }}
      />
    </svg>
  );
}
