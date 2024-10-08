import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-5ZCD8X9L" />
      <GoogleAnalytics gaId="G-CPC16CX538" />
    </>
  );
}
