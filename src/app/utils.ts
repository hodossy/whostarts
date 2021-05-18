export interface Point {
  x: number;
  y: number;
}

export function distance(p1: Point, p2: Point): number {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}

export function shuffleArray<T>(array: Array<T>): Array<T> {
  const a = array.slice();

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

export function luminance(r: number, g: number, b: number): number {
    var colorArray = [r, g, b];
    var colorFactor: number;
    var i: number;
    for (i = 0; i < colorArray.length; i++) {
        colorFactor = colorArray[i] / 255;
        if (colorFactor <= 0.03928) {
            colorFactor = colorFactor / 12.92;
        } else {
            colorFactor = Math.pow(((colorFactor + 0.055) / 1.055), 2.4);
        }
        colorArray[i] = colorFactor;
    }
    return (colorArray[0] * 0.2126 + colorArray[1] * 0.7152 + colorArray[2] * 0.0722) + 0.05;
}

export function colorToRGBA(col: string): Array<number> {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('2DRenderingContext not available');
  }

  ctx.clearRect(0, 0, 1, 1);
  // In order to detect invalid values,
  // we can't rely on col being in the same format as what fillStyle is computed as,
  // but we can ask it to implicitly compute a normalized value twice and compare.
  ctx.fillStyle = '#000';
  ctx.fillStyle = col;
  var computed = ctx.fillStyle;
  ctx.fillStyle = '#fff';
  ctx.fillStyle = col;
  if (computed !== ctx.fillStyle) {
    throw new Error(`Invalid computed color: ${ctx.fillStyle}`);
  }
  ctx.fillRect(0, 0, 1, 1);
  return [ ... ctx.getImageData(0, 0, 1, 1).data ];
}

export function contrast(rgb1: Array<number>, rgb2: Array<number>): number {
  const l1 = luminance(rgb1[0], rgb1[1], rgb1[2]) + 0.05;
  const l2 = luminance(rgb2[0], rgb2[1], rgb2[2]) + 0.05;
  return Math.max(l1, l2) / Math.min(l1, l2);
}
