// A fixed-width decode frame: settled letters remain in place as symbols resolve.
export const DECODE_GLYPHS = '#</>{}[]=+*^:~10';
export function decodedFrame(text, progress, random = Math.random) {
  const settled = Math.floor(Math.max(0, Math.min(1, progress)) * text.length);
  return Array.from(text, (letter, index) => {
    if (index < settled || letter === ' ') return letter;
    return DECODE_GLYPHS[Math.floor(random() * DECODE_GLYPHS.length)];
  }).join('');
}
