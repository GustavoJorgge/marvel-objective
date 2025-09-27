import md5 from "md5";

/* Coloquei a autenticação em um arquivo separado para manter o codigo
 mais organizado e facilitar a reutilização */

export function getMarvelAuth() {
  const ts = Date.now().toString();
  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
  const hash = md5(ts + privateKey + publicKey);

  return { ts, publicKey, hash };
}
