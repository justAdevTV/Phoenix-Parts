import { primaryTheme } from '../components/_settings/_themes';
import { ApolloProvider } from '@apollo/react-hooks';
import AppProvider from '../components/AppProvider';
import { withData } from '../auth';

// apollo comes from withData
// Component and pageProps come from Nextjs
function App({ apollo, Component, pageProps }) {
  // ==========================HOOKS/VARIABLES/REQ HERE===========================

  // ==========================INITIALIZERS HERE===========================

  // ==========================RENDER HERE===========================
  return (
    <AppProvider title="Phoenix Parts" theme={primaryTheme}>
      {/*Passes apollo-client instance to ApolloProvider component*/}
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppProvider>
  );
}

export default withData(App);
