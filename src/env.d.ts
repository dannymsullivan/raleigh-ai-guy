/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_VAPI_PUBLIC_KEY?: string;
  readonly PUBLIC_VAPI_ASSISTANT_ID?: string;
  readonly PUBLIC_DEMO_PHONE_NUMBER?: string;
  readonly PUBLIC_CONTACT_FORM_ENDPOINT?: string;
}

declare module "@lexingtonthemes/seo" {
  import type { AstroComponentFactory } from "astro/runtime/server/index.js";
  export const AstroSeo: AstroComponentFactory;
}
