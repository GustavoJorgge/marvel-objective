export const API_BASE = import.meta.env.VITE_API_BASE;
export const MARVEL_PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
export const MARVEL_PRIVATE_KEY = import.meta.env.MARVEL_PRIVATE_KEY;

if (!API_BASE) {
  console.warn("VITE_API_BASE não definida!!!.");
}
if (!MARVEL_PUBLIC_KEY) {
  console.warn("VITE_MARVEL_PUBLIC_KEY não definida!!!.");
}
if (!MARVEL_PRIVATE_KEY) {
  console.warn("VITE_MARVEL_PRIVATE_KEY não definida!!!.");
}
