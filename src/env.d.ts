interface ImportMetaEnv {
  readonly VITE_MARVEL_PUBLIC_KEY?: string;
  readonly VITE_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
