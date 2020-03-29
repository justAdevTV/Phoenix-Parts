import { primaryTheme } from "../components/_settings/_themes";
import AppProvider from "../components/AppProvider";

// Component and pageProps come from Nextjs
function App({ Component, pageProps }) {
  // ==========================HOOKS/VARIABLES/REQ HERE===========================

  // ==========================INITIALIZERS HERE===========================

  // ==========================RENDER HERE===========================
  return (
    <AppProvider title="Phoenix Parts" theme={primaryTheme}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;
