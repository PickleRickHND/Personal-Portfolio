export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

const ROMAN: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function toRoman(n: number): string {
  if (!Number.isInteger(n) || n <= 0) return String(n);
  let out = "";
  let rem = n;
  for (const [v, s] of ROMAN) {
    while (rem >= v) {
      out += s;
      rem -= v;
    }
  }
  return out;
}
