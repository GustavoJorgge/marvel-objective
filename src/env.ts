export const API_BASE = import.meta.env.VITE_API_BASE;
export const MARVEL_PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;

if (!MARVEL_PUBLIC_KEY) {
  console.warn("VITE_MARVEL_PUBLIC_KEY não definida!!!.");
}
