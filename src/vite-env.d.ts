/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_JSON_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
