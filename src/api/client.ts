import axios from "axios";
import { API_BASE, MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } from "../env";
import md5 from "md5";

function generateHash(timestamp: number): string {
  const hash = md5(`${timestamp}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`);
  return hash;
}

export const api = axios.create({
  baseURL: API_BASE,
});

