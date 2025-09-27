import axios from "axios";
import md5 from "md5";
import { BASE_URL } from "../env";

export const api = axios.create({
  baseURL: BASE_URL,
});

// Coloquei este interceptor para autenticar na requisição automaticamente.

api.interceptors.request.use((config) => {
  const ts = Date.now().toString();
  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
  const hash = md5(ts + privateKey + publicKey);

  config.params = {
    ...config.params,
    ts,
    apikey: publicKey,
    hash,
  };

  return config;
});
