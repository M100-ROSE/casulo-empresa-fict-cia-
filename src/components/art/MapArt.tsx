export function MapArt() {
  return (
    <svg viewBox="0 0 600 460" role="img" aria-labelledby="map-title map-desc">
      <title id="map-title">Mapa esquemático da localização da Casulo na Vila Madalena</title>
      <desc id="map-desc">
        Rua das Acácias, 214, entre a Rua Harmonia e a Rua Girassol, a oito minutos a pé do metrô
        Fradique Coutinho.
      </desc>
      <rect width="600" height="460" fill="#F3EDE3" />
      <path
        d="M-20 80c70-40 150-30 190 10 24 24 44 30 86 18 66-18 96 20 140 26 52 8 90-18 224-8v-160H-20Z"
        fill="#CFDCC7"
      />
      <g fill="#FBF7F0">
        <path d="M150 0h26v460h-26z" />
        <path d="M390 0h26v460h-26z" />
        <path d="M0 150h600v24H0z" />
        <path d="M0 310h600v22H0z" />
        <path d="M0 400L600 238v30L0 430z" />
      </g>
      <g stroke="#D8CDBC" strokeWidth="1.5" strokeDasharray="6 8" fill="none">
        <path d="M163 0v460" />
        <path d="M403 0v460" />
        <path d="M0 162h600" />
        <path d="M0 321h600" />
        <path d="M0 412L600 250" />
      </g>
      <g fill="#2C2A24" opacity="0.35">
        <rect x="24" y="186" width="56" height="10" rx="3" />
        <rect x="24" y="206" width="38" height="10" rx="3" />
        <rect x="200" y="182" width="62" height="12" rx="3" />
        <rect x="288" y="182" width="54" height="12" rx="3" />
        <rect x="438" y="182" width="80" height="12" rx="3" />
        <rect x="200" y="346" width="70" height="12" rx="3" />
        <rect x="300" y="346" width="42" height="12" rx="3" />
        <rect x="438" y="350" width="60" height="10" rx="3" />
      </g>
      <text
        x="52"
        y="62"
        fill="#6E6659"
        fontFamily="Karla, system-ui, sans-serif"
        fontSize="18"
        letterSpacing="1.6"
      >
        VILA MADALENA
      </text>
      <text
        x="30"
        y="140"
        fill="#7F8F79"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="19"
        fontStyle="italic"
      >
        Praça
      </text>
      <text
        className="map-street"
        x="246"
        y="378"
        fill="#6E6659"
        fontFamily="Karla, system-ui, sans-serif"
        fontSize="15"
        letterSpacing="1.2"
        transform="rotate(-16 246 378)"
      >
        R. DAS ACÁCIAS
      </text>
      <text
        className="map-street"
        x="176"
        y="112"
        fill="#6E6659"
        fontFamily="Karla, system-ui, sans-serif"
        fontSize="14"
        letterSpacing="1.2"
        transform="rotate(90 176 112)"
      >
        R. GIRASSOL
      </text>
      <text
        className="map-street"
        x="415"
        y="112"
        fill="#6E6659"
        fontFamily="Karla, system-ui, sans-serif"
        fontSize="14"
        letterSpacing="1.2"
        transform="rotate(90 415 112)"
      >
        R. HARMONIA
      </text>

      <circle cx="300" cy="292" r="58" fill="#C98A5E" opacity="0.16" />
      <path
        d="M300 242c-19 0-34 15-34 34 0 26 34 56 34 56s34-30 34-56c0-19-15-34-34-34z"
        fill="#A9512F"
      />
      <circle cx="300" cy="276" r="12" fill="#FBF7F0" />
    </svg>
  );
}
