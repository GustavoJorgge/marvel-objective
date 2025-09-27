export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const MARVEL_PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
export const MARVEL_PRIVATE_KEY = import.meta.env.MARVEL_PRIVATE_KEY;

if (!BASE_URL) {
  console.warn("VITE_BASE_URL não definida!!!.");
}
if (!MARVEL_PUBLIC_KEY) {
  console.warn("VITE_MARVEL_PUBLIC_KEY não definida!!!.");
}
if (!MARVEL_PRIVATE_KEY) {
  console.warn("VITE_MARVEL_PRIVATE_KEY não definida!!!.");
}
