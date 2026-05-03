const sharp = require('sharp');
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0f0f0e"/>
  <text x="60" y="80" font-family="Inter, sans-serif" font-size="28" font-weight="600" fill="#ffffff">deskless.team</text>
  <text x="60" y="290" font-family="Inter, sans-serif" font-size="56" font-weight="700" fill="#ffffff">Turn field data into</text>
  <text x="60" y="360" font-family="Inter, sans-serif" font-size="56" font-weight="700" fill="#ffffff">AI-ready operations memory.</text>
  <text x="60" y="430" font-family="Inter, sans-serif" font-size="22" fill="#9a9a96">WhatsApp · Photos · Voice notes — structured and queryable.</text>
  <text x="1020" y="590" font-family="Inter, sans-serif" font-size="16" fill="#6b6b66">deskless.team</text>
</svg>`;
sharp(Buffer.from(svg)).png().toFile('public/og-image.png').then(() => console.log('done'));
