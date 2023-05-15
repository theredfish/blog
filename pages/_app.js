import "../styles/global.css";
import "prismjs/themes/prism-twilight.min.css";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="theredfi.sh">
      <Component {...pageProps} />;
    </PlausibleProvider>
  );
}
